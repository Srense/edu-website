import React, { useState, useEffect, useRef } from 'react';
import { BotAvatar } from 'bot-avatars';
import { useLocation } from 'react-router-dom';
import { X, RotateCcw, Sparkles } from 'lucide-react';

/**
 * GlobalGhostBot for NeuraliftX Website
 * 
 * Floating interactive Ghost companion that sits on all pages.
 * - Draggable or stays comfortably anchored at bottom-right.
 * - Tap to activate pointing / text highlight tool.
 * - Tap or drag pointer over any word / sentence on the site for instant AI breakdown.
 */
export default function GlobalGhostBot({ size = 52, className = '' }) {
    const location = useLocation();
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const checkTheme = () => {
            if (typeof document !== 'undefined') {
                setIsDark(
                    document.documentElement.classList.contains('dark') ||
                    document.body.classList.contains('dark')
                );
            }
        };
        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    const [avatarState, setAvatarState] = useState('default');
    const [isPointerActive, setIsPointerActive] = useState(false);
    const [selectedTarget, setSelectedTarget] = useState(null);
    const [pointerPos, setPointerPos] = useState({ x: 120, y: 300 });
    const [isDraggingPointer, setIsDraggingPointer] = useState(false);
    const dragOffsetRef = useRef({ x: 0, y: 0 });

    const [hoverTarget, setHoverTarget] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);

    // Draggable mascot position (null = default bottom-right)
    const [mascotPos, setMascotPos] = useState(null);
    const mascotDragStartRef = useRef(null);

    const handleMascotPointerDown = (e) => {
        mascotDragStartRef.current = {
            startX: e.clientX,
            startY: e.clientY,
            hasMoved: false,
            initPos: mascotPos || {
                x: e.currentTarget.getBoundingClientRect().left,
                y: e.currentTarget.getBoundingClientRect().top
            }
        };
        try {
            e.currentTarget.setPointerCapture(e.pointerId);
        } catch {}
    };

    const handleMascotPointerMove = (e) => {
        if (!mascotDragStartRef.current) return;
        const dx = e.clientX - mascotDragStartRef.current.startX;
        const dy = e.clientY - mascotDragStartRef.current.startY;
        if (Math.hypot(dx, dy) > 6) {
            mascotDragStartRef.current.hasMoved = true;
            const newX = Math.max(10, Math.min((window.innerWidth || 360) - size - 10, mascotDragStartRef.current.initPos.x + dx));
            const newY = Math.max(10, Math.min((window.innerHeight || 640) - size - 10, mascotDragStartRef.current.initPos.y + dy));
            setMascotPos({ x: newX, y: newY });
        }
    };

    const handleMascotPointerUp = (e) => {
        if (!mascotDragStartRef.current) return;
        try {
            e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {}
        const hasMoved = mascotDragStartRef.current.hasMoved;
        mascotDragStartRef.current = null;
        if (!hasMoved) {
            handleGhostClick(e);
        }
    };

    const extractFormulaTarget = (el, textNode, range) => {
        const mathContainer = (
            el?.closest?.('.katex, .katex-display, .math-block-wrapper, math, [data-latex], [data-math], [data-formula], .latex-formula, .math-tex') ||
            textNode?.parentElement?.closest?.('.katex, .katex-display, .math-block-wrapper, math, [data-latex], [data-math], [data-formula], .latex-formula, .math-tex')
        );

        if (mathContainer) {
            const annotation = mathContainer.querySelector?.('annotation[encoding*="tex"], annotation[encoding*="latex"]')?.textContent?.trim();
            const dataLatex = mathContainer.getAttribute?.('data-latex') || mathContainer.getAttribute?.('data-math') || mathContainer.getAttribute?.('data-formula');
            const visualEl = mathContainer.querySelector?.('.katex-html') || mathContainer;
            let visualText = (visualEl.innerText || visualEl.textContent || '').replace(/\s+/g, ' ').trim();

            let formulaText = annotation || dataLatex || visualText;
            if (formulaText) {
                const rect = mathContainer.getBoundingClientRect();
                if (rect.width > 0 && rect.height > 0) {
                    return {
                        text: formulaText,
                        word: formulaText,
                        sentence: formulaText,
                        mode: 'word',
                        isFormula: true,
                        rect: { top: rect.top, left: rect.left, right: rect.right, bottom: rect.bottom, width: rect.width, height: rect.height },
                        wordRect: { top: rect.top, left: rect.left, right: rect.right, bottom: rect.bottom, width: rect.width, height: rect.height },
                        sentRect: { top: rect.top, left: rect.left, right: rect.right, bottom: rect.bottom, width: rect.width, height: rect.height }
                    };
                }
            }
        }

        if (textNode) {
            const fullText = textNode.textContent || '';
            const offset = (range && range.startOffset !== undefined) ? range.startOffset : 0;
            const openIdx = fullText.lastIndexOf('(', offset);
            const closeIdx = fullText.indexOf(')', openIdx === -1 ? offset : openIdx);

            if (openIdx !== -1 && closeIdx !== -1 && closeIdx > openIdx) {
                let exprEnd = closeIdx + 1;
                while (exprEnd < fullText.length && /[\^0-9a-zA-Z²³⁴+\-*/]/.test(fullText[exprEnd])) {
                    exprEnd++;
                }
                const mathExpr = fullText.slice(openIdx, exprEnd).trim();
                if (mathExpr.length >= 3) {
                    try {
                        const mathRange = document.createRange();
                        mathRange.setStart(textNode, openIdx);
                        mathRange.setEnd(textNode, exprEnd);
                        const mRect = mathRange.getBoundingClientRect();
                        if (mRect.width > 0 && mRect.height > 0) {
                            return {
                                text: mathExpr,
                                word: mathExpr,
                                sentence: fullText.trim(),
                                mode: 'word',
                                isFormula: true,
                                rect: { top: mRect.top, left: mRect.left, right: mRect.right, bottom: mRect.bottom, width: mRect.width, height: mRect.height },
                                wordRect: { top: mRect.top, left: mRect.left, right: mRect.right, bottom: mRect.bottom, width: mRect.width, height: mRect.height },
                                sentRect: { top: mRect.top, left: mRect.left, right: mRect.right, bottom: mRect.bottom, width: mRect.width, height: mRect.height }
                            };
                        }
                    } catch {}
                }
            }
        }
        return null;
    };

    const resolveTargetAtPoint = (x, y) => {
        const selection = window.getSelection();
        if (selection && selection.toString().trim().length > 0 && selection.rangeCount > 0) {
            const selRange = selection.getRangeAt(0);
            const rect = selRange.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
                const text = selection.toString().trim();
                return {
                    text,
                    word: text,
                    sentence: text,
                    rect: { top: rect.top, left: rect.left, right: rect.right, bottom: rect.bottom, width: rect.width, height: rect.height }
                };
            }
        }

        const pointerEl = document.getElementById('website-ghost-draggable-pointer');
        let prevDisplay = '';
        if (pointerEl) {
            prevDisplay = pointerEl.style.display;
            pointerEl.style.display = 'none';
        }

        let range = null;
        let el = null;
        try {
            if (document.caretRangeFromPoint) {
                range = document.caretRangeFromPoint(x, y);
            } else if (document.caretPositionFromPoint) {
                const pos = document.caretPositionFromPoint(x, y);
                if (pos && pos.offsetNode) {
                    range = document.createRange();
                    range.setStart(pos.offsetNode, pos.offset);
                    range.setEnd(pos.offsetNode, pos.offset);
                }
            }
            el = document.elementFromPoint(x, y);
        } catch {} finally {
            if (pointerEl) pointerEl.style.display = prevDisplay;
        }

        const textNode = (range && range.startContainer && range.startContainer.nodeType === Node.TEXT_NODE) ? range.startContainer : null;
        const formulaTarget = extractFormulaTarget(el, textNode, range);
        if (formulaTarget) return formulaTarget;

        if (textNode) {
            const fullText = textNode.textContent || '';
            const offset = range.startOffset;

            let wStart = offset;
            while (wStart > 0 && !/[\s\.,!?;:()"'`“”\/\\]/.test(fullText[wStart - 1])) wStart--;
            let wEnd = offset;
            while (wEnd < fullText.length && !/[\s\.,!?;:()"'`“”\/\\]/.test(fullText[wEnd])) wEnd++;
            let word = fullText.slice(wStart, wEnd).trim();

            if (!word || (word.length === 1 && /[()\[\]\{\}\+\-\*\/\=\^\<\>]/.test(word))) {
                const openIdx = fullText.lastIndexOf('(', offset);
                const closeIdx = fullText.indexOf(')', openIdx === -1 ? offset : openIdx);
                if (openIdx !== -1 && closeIdx !== -1 && closeIdx > openIdx) {
                    let exprEnd = closeIdx + 1;
                    while (exprEnd < fullText.length && /[\^0-9a-zA-Z²³⁴+\-*/]/.test(fullText[exprEnd])) exprEnd++;
                    wStart = openIdx;
                    wEnd = exprEnd;
                    word = fullText.slice(wStart, wEnd).trim();
                }
            }

            if (word.length > 0) {
                try {
                    const wordRange = document.createRange();
                    wordRange.setStart(textNode, wStart);
                    wordRange.setEnd(textNode, wEnd);
                    const wRect = wordRange.getBoundingClientRect();
                    if (wRect.width > 0 && wRect.height > 0) {
                        return {
                            text: word,
                            word,
                            sentence: fullText.trim(),
                            rect: { top: wRect.top, left: wRect.left, right: wRect.right, bottom: wRect.bottom, width: wRect.width, height: wRect.height }
                        };
                    }
                } catch {}
            }
        }

        if (el && !el.closest('#website-ghost-pointer-system')) {
            const rawText = (el.innerText || el.textContent || '').trim();
            if (rawText.length > 0 && rawText.length < 160) {
                const rect = el.getBoundingClientRect();
                if (rect.width > 0 && rect.height > 0) {
                    const firstWord = rawText.split(/\s+/)[0] || rawText;
                    return {
                        text: rawText,
                        word: firstWord,
                        sentence: rawText,
                        rect: { top: rect.top, left: rect.left, right: rect.right, bottom: rect.bottom, width: rect.width, height: rect.height }
                    };
                }
            }
        }
        return null;
    };

    useEffect(() => {
        if (!isPointerActive || !isDraggingPointer) return;
        const target = resolveTargetAtPoint(pointerPos.x + 3, pointerPos.y + 3);
        if (target && target.text && (!hoverTarget || hoverTarget.text !== target.text)) {
            setHoverTarget(target);
        }
    }, [isPointerActive, isDraggingPointer, pointerPos.x, pointerPos.y]);

    const handlePointerDragStart = (e) => {
        setIsDraggingPointer(true);
        const rect = e.currentTarget.getBoundingClientRect();
        dragOffsetRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        try { e.currentTarget.setPointerCapture(e.pointerId); } catch {}
    };

    const handlePointerDragMove = (e) => {
        if (!isDraggingPointer) return;
        const nextX = Math.max(2, Math.min(window.innerWidth - 25, e.clientX - dragOffsetRef.current.x));
        const nextY = Math.max(5, Math.min(window.innerHeight - 25, e.clientY - dragOffsetRef.current.y));
        setPointerPos({ x: nextX, y: nextY });
    };

    const handlePointerDragEnd = (e) => {
        try { e.currentTarget.releasePointerCapture(e.pointerId); } catch {}
        setIsDraggingPointer(false);
        if (hoverTarget) {
            setSelectedTarget({ ...hoverTarget, mode: 'word' });
            setHoverTarget(null);
        }
    };

    const handleDocumentClick = (e) => {
        if (!isPointerActive || selectedTarget || isDraggingPointer) return;
        const clientX = e.clientX;
        const clientY = e.clientY;
        if (clientX === undefined || clientY === undefined) return;

        const el = document.elementFromPoint(clientX, clientY);
        if (el && el.closest('#website-ghost-pointer-system')) return;

        const target = resolveTargetAtPoint(clientX, clientY);
        if (target) {
            try { e.stopPropagation(); } catch {}
            setSelectedTarget({ ...target, mode: 'word' });
            setHoverTarget(null);
        }
    };

    useEffect(() => {
        if (!isPointerActive || selectedTarget) return;
        window.addEventListener('click', handleDocumentClick, { capture: true });
        return () => window.removeEventListener('click', handleDocumentClick, { capture: true });
    }, [isPointerActive, selectedTarget, isDraggingPointer]);

    const handleGhostClick = (e) => {
        e?.stopPropagation?.();
        if (isPointerActive || selectedTarget) {
            closeAll();
        } else {
            setIsPointerActive(true);
            setSelectedTarget(null);
            setAvatarState('working');
            setPointerPos({
                x: Math.round(window.innerWidth / 2) - 20,
                y: Math.round(window.innerHeight / 2) - 60
            });
        }
    };

    const closeAll = (e) => {
        e?.stopPropagation?.();
        setIsPointerActive(false);
        setSelectedTarget(null);
        setHoverTarget(null);
        setIsDraggingPointer(false);
        setShowExplanation(false);
        setAvatarState('default');
    };

    const resetSelection = (e) => {
        e?.stopPropagation?.();
        setSelectedTarget(null);
        setShowExplanation(false);
        setAvatarState('default');
    };

    const getLaymanExplanation = (rawText) => {
        const text = (rawText || '').trim();
        const lower = text.toLowerCase();

        if (lower.includes('neuralift') || lower.includes('platform')) {
            return {
                title: 'NeuraLiftX Platform',
                summary: 'NeuraLiftX is an adaptive AI education ecosystem designed to personalize learning paths, diagnose skill gaps in real time, and coach students toward mastery.',
                example1: "Like a dedicated personal tutor who knows exactly where you get stuck and adapts lessons to your pace.",
                example2: "Like GPS for education that calculates the fastest path to mastering your syllabus."
            };
        }

        if (lower.includes('cognitive') || lower.includes('brain') || lower.includes('learning')) {
            return {
                title: text.length > 20 ? text.slice(0, 18) + '...' : text,
                summary: 'Cognitive learning models dynamically observe student response speed, retention curves, and problem-solving patterns to reinforce core intuition.',
                example1: "Like workout training that targets specific muscles rather than generic exercise.",
                example2: "Like spaced repetition that reminds you right before you are about to forget."
            };
        }

        return {
            title: text.length > 25 ? text.slice(0, 22) + '...' : text,
            summary: `"${text}" is an essential concept on this page explaining the vision and capabilities of the platform.`,
            example1: "Like a helpful glossary term in the margins of a premier guidebook.",
            example2: "Like a quick interactive spotlight to clarify complex terminology instantly."
        };
    };

    const selectTargetMode = (mode) => {
        if (!selectedTarget) return;
        if (mode === 'sentence') {
            const newText = selectedTarget.sentence || selectedTarget.text;
            const newRect = selectedTarget.sentRect || selectedTarget.rect;
            setSelectedTarget({
                ...selectedTarget,
                mode: 'sentence',
                text: newText,
                rect: newRect
            });
        } else if (mode === 'word') {
            const newText = selectedTarget.word || selectedTarget.text;
            const newRect = selectedTarget.wordRect || selectedTarget.rect;
            setSelectedTarget({
                ...selectedTarget,
                mode: 'word',
                text: newText,
                rect: newRect
            });
        }
    };

    const getCutoutClipPath = (rect) => {
        if (!rect) return 'none';
        const p = 6;
        const t = Math.max(0, Math.round(rect.top - p));
        const l = Math.max(0, Math.round(rect.left - p));
        const r = Math.min(window.innerWidth, Math.round(rect.right + p));
        const b = Math.min(window.innerHeight, Math.round(rect.bottom + p));
        return `polygon(evenodd, 0% 0%, 0% 100%, 100% 100%, 100% 0%, 0% 0%, ${l}px ${t}px, ${r}px ${t}px, ${r}px ${b}px, ${l}px ${b}px, ${l}px ${t}px)`;
    };

    return (
        <div id="website-ghost-pointer-system" style={{ position: 'relative', zIndex: 99999 }}>
            {/* 1. Backdrop Blur */}
            {selectedTarget && selectedTarget.rect && (
                <div
                    onClick={resetSelection}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 99990,
                        backgroundColor: 'rgba(15, 23, 42, 0.45)',
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        clipPath: getCutoutClipPath(selectedTarget.rect),
                        WebkitClipPath: getCutoutClipPath(selectedTarget.rect),
                        transition: 'all 0.25s ease',
                    }}
                />
            )}

            {/* 2. Spotlight Ring */}
            {selectedTarget && selectedTarget.rect && (
                <div
                    style={{
                        position: 'fixed',
                        pointerEvents: 'none',
                        zIndex: 99992,
                        top: selectedTarget.rect.top - 6,
                        left: selectedTarget.rect.left - 6,
                        width: selectedTarget.rect.width + 12,
                        height: selectedTarget.rect.height + 12,
                        border: '2px solid #ea580c',
                        borderRadius: '8px',
                        boxShadow: '0 0 20px rgba(234, 88, 12, 0.8), inset 0 0 6px rgba(234, 88, 12, 0.3)',
                        background: 'rgba(234, 88, 12, 0.08)',
                    }}
                />
            )}

            {/* 3. Action Pill */}
            {selectedTarget && selectedTarget.rect && (
                <div
                    style={{
                        position: 'fixed',
                        zIndex: 99993,
                        top: Math.min(window.innerHeight - 55, selectedTarget.rect.bottom + 10),
                        left: Math.max(12, Math.min(window.innerWidth - 260, (selectedTarget.rect.left + selectedTarget.rect.right) / 2 - 120)),
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        borderRadius: '9999px',
                        background: '#ffffff',
                        color: '#0f172a',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                        border: '1px solid rgba(234, 88, 12, 0.4)',
                        fontSize: '12px',
                        fontWeight: '600',
                    }}
                >
                    <button
                        onClick={() => setShowExplanation(true)}
                        style={{
                            background: '#ea580c',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '9999px',
                            padding: '4px 10px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontWeight: 'bold',
                        }}
                    >
                        <Sparkles size={12} />
                        Explain
                    </button>

                    {/* Word / Sentence toggle */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2px', background: '#f1f5f9', padding: '2px', borderRadius: '9999px' }}>
                        <button
                            onClick={() => selectTargetMode('word')}
                            style={{
                                background: (selectedTarget.mode === 'word' || !selectedTarget.mode) ? '#ea580c' : 'transparent',
                                color: (selectedTarget.mode === 'word' || !selectedTarget.mode) ? '#ffffff' : '#64748b',
                                border: 'none',
                                borderRadius: '9999px',
                                padding: '3px 8px',
                                fontSize: '10px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                            }}
                        >
                            Word
                        </button>
                        <button
                            onClick={() => selectTargetMode('sentence')}
                            style={{
                                background: selectedTarget.mode === 'sentence' ? '#ea580c' : 'transparent',
                                color: selectedTarget.mode === 'sentence' ? '#ffffff' : '#64748b',
                                border: 'none',
                                borderRadius: '9999px',
                                padding: '3px 8px',
                                fontSize: '10px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                            }}
                        >
                            Sentence
                        </button>
                    </div>

                    <button
                        onClick={resetSelection}
                        style={{
                            background: '#f8fafc',
                            color: '#64748b',
                            border: 'none',
                            borderRadius: '9999px',
                            padding: '4px 8px',
                            cursor: 'pointer',
                            fontSize: '11px',
                        }}
                    >
                        Clear
                    </button>
                </div>
            )}

            {/* 4. Explanation Modal */}
            {selectedTarget && showExplanation && (() => {
                const info = getLaymanExplanation(selectedTarget.text);
                return (
                    <div
                        style={{
                            position: 'fixed',
                            zIndex: 99997,
                            top: Math.max(20, Math.min(window.innerHeight - 380, selectedTarget.rect.bottom + 16)),
                            left: Math.max(16, Math.min(window.innerWidth - 320, (selectedTarget.rect.left + selectedTarget.rect.right) / 2 - 150)),
                            width: '300px',
                            maxWidth: 'calc(100vw - 32px)',
                            padding: '16px',
                            borderRadius: '20px',
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(20px)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.25), 0 0 20px rgba(234, 88, 12, 0.2)',
                            border: '1.5px solid rgba(234, 88, 12, 0.3)',
                            color: '#0f172a',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <BotAvatar type="ghost" size={24} shading="plastic" state="working" />
                                <span style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', color: '#c2410c' }}>
                                    Quick Breakdown
                                </span>
                            </div>
                            <button
                                onClick={() => setShowExplanation(false)}
                                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#64748b' }}
                            >
                                <X size={16} />
                            </button>
                        </div>
                        <h4 style={{ margin: '0 0 6px', fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>
                            {info.title}
                        </h4>
                        <p style={{ margin: '0 0 10px', fontSize: '12px', lineHeight: '1.5', color: '#334155' }}>
                            {info.summary}
                        </p>
                        <div style={{ background: '#fff7ed', borderRadius: '12px', padding: '10px', border: '1px solid #ffedd5' }}>
                            <div style={{ fontSize: '11px', fontWeight: '700', color: '#c2410c', marginBottom: '4px' }}>
                                Real-World Examples:
                            </div>
                            <div style={{ fontSize: '11px', color: '#7c2d12', marginBottom: '4px' }}>
                                • {info.example1}
                            </div>
                            <div style={{ fontSize: '11px', color: '#7c2d12' }}>
                                • {info.example2}
                            </div>
                        </div>
                    </div>
                );
            })()}

            {/* 5. Target Ripple under cursor tip */}
            {isPointerActive && !selectedTarget && hoverTarget && hoverTarget.rect && (
                <div
                    style={{
                        position: 'fixed',
                        pointerEvents: 'none',
                        zIndex: 99991,
                        top: hoverTarget.rect.top - 2,
                        left: hoverTarget.rect.left - 3,
                        width: hoverTarget.rect.width + 6,
                        height: hoverTarget.rect.height + 4,
                        background: 'rgba(234, 88, 12, 0.18)',
                        borderBottom: '2px solid #ea580c',
                        borderRadius: '4px',
                    }}
                />
            )}

            {/* 6. Mouse Cursor Pointer Arrow */}
            {isPointerActive && !selectedTarget && (
                <div
                    id="website-ghost-draggable-pointer"
                    onPointerDown={handlePointerDragStart}
                    onPointerMove={handlePointerDragMove}
                    onPointerUp={handlePointerDragEnd}
                    onPointerCancel={handlePointerDragEnd}
                    style={{
                        position: 'fixed',
                        zIndex: 99995,
                        left: pointerPos.x,
                        top: pointerPos.y,
                        touchAction: 'none',
                        cursor: 'grab',
                    }}
                >
                    <svg width="22" height="22" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}>
                        <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" fill="#0f172a" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                </div>
            )}

            {/* 7. Floatable Ghost Mascot Anchor */}
            <div
                style={
                    mascotPos
                        ? {
                            position: 'fixed',
                            zIndex: 99999,
                            left: `${mascotPos.x}px`,
                            top: `${mascotPos.y}px`,
                            touchAction: 'none',
                        }
                        : {
                            position: 'fixed',
                            zIndex: 99999,
                            bottom: '24px',
                            right: '24px',
                            touchAction: 'none',
                        }
                }
            >
                <button
                    onPointerDown={handleMascotPointerDown}
                    onPointerMove={handleMascotPointerMove}
                    onPointerUp={handleMascotPointerUp}
                    onPointerCancel={handleMascotPointerUp}
                    type="button"
                    aria-label="Ghost companion"
                    title={isPointerActive || selectedTarget ? "Close pointer mode" : "Tap to launch pointer, or drag to reposition"}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        cursor: 'grab',
                        padding: '4px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        filter: 'drop-shadow(0 6px 18px rgba(30,20,50,0.2))',
                        touchAction: 'none',
                    }}
                >
                    <BotAvatar
                        type="ghost"
                        state={isPointerActive || selectedTarget ? 'working' : avatarState}
                        size={size}
                        theme={isDark ? 'dark' : 'light'}
                        shading="plastic"
                        interactive={true}
                    />
                </button>
            </div>
        </div>
    );
}
