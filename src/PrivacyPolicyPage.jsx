import React from "react";
import { useNavigate } from "react-router-dom";
import { Shield, Lock, Eye, FileText, ArrowLeft, Mail, Phone, MapPin, CheckCircle, AlertTriangle, ExternalLink } from "lucide-react";
import OrganicNavbar from "./components/OrganicNavbar";
import SEO from "./components/SEO";

const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen organic-theme selection:bg-amber-100 flex flex-col">
      <SEO
        title="Privacy Policy | NeuraliftX"
        description="NeuraliftX Privacy Policy in compliance with India's Digital Personal Data Protection Act, 2023 (DPDP Act) and DPDP Rules, 2025."
      />

      <OrganicNavbar />

      <main className="flex-1 max-w-5xl mx-auto px-6 py-12 md:py-16 w-full">
        {/* Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-stone-900 transition mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to NeuraliftX
        </button>

        {/* Header Hero */}
        <div className="mb-12 border-b border-stone-200/60 pb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#c87037]/10 text-[#c87037] border border-[#c87037]/20 mb-4">
            <Shield size={14} />
            DPDP Act, 2023 & DPDP Rules, 2025 Compliant
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-stone-900 mb-4">
            NeuraliftX Privacy Policy
          </h1>
          <p className="mt-4 text-stone-600 leading-relaxed text-sm md:text-base max-w-3xl">
            This policy explains what personal data NeuraliftX collects, why, and the choices students and parents have, in strict alignment with India's Digital Personal Data Protection Act, 2023 (DPDP Act) and the DPDP Rules, 2025.
          </p>
        </div>

        {/* Quick Highlights Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-white/70 border border-stone-200/80 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
              <CheckCircle size={20} />
            </div>
            <h3 className="font-bold text-stone-900 text-sm mb-1">Verifiable Parental Consent</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              No processing of a child's data occurs until a verified parent or guardian consents. Parents maintain complete control.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/70 border border-stone-200/80 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-amber-50 text-[#c87037] flex items-center justify-center mb-3">
              <Lock size={20} />
            </div>
            <h3 className="font-bold text-stone-900 text-sm mb-1">No Targeted Ads & No Selling</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We never sell student data and never display targeted advertising. Data is used exclusively to facilitate adaptive learning.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/70 border border-stone-200/80 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Eye size={20} />
            </div>
            <h3 className="font-bold text-stone-900 text-sm mb-1">Learning, Not Profiling</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              We evaluate quiz answers and syllabus progress solely to personalize teaching, never for behavioral surveillance.
            </p>
          </div>
        </div>

        {/* Policy Body */}
        <div className="space-y-10 text-stone-800 text-sm leading-relaxed">
          {/* Section 1 */}
          <section className="bg-white/80 p-6 md:p-8 rounded-3xl border border-stone-200/80 shadow-sm">
            <h2 className="text-xl font-black text-stone-900 mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#c87037]/10 text-[#c87037] text-xs font-black inline-flex items-center justify-center">1</span>
              Who We Are
            </h2>
            <p className="mb-3">
              NeuraliftX is operated by <strong>Alfrin Technologies Private Limited</strong>, a company registered in Kolkata, West Bengal, India ("we", "us"). We are the <strong>Data Fiduciary</strong> for the personal data described in this policy: we decide why and how it is processed, and we are responsible for protecting it.
            </p>
            <p className="mb-4">
              This policy covers the NeuraliftX mobile app, website, and related services. It applies to students, parents and guardians, teachers, and schools that use NeuraliftX.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-stone-200/60 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#c87037] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-900 font-bold mb-0.5">Company Registered Address:</strong>
                  194/H, S. N. Roy Road, Ward Number 118, Sahapur, Kolkata, West Bengal, 700038, India
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail size={16} className="text-[#c87037] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-stone-900 font-bold mb-0.5">Grievance Officer:</strong>
                  Annkit Sarkar · <a href="mailto:contact@neuraliftx.in" className="text-[#c87037] underline font-semibold">contact@neuraliftx.in</a>
                  <br />
                  Phone: <a href="tel:+918697319384" className="text-stone-700 hover:text-stone-900">+91 8697319384</a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-white/80 p-6 md:p-8 rounded-3xl border border-stone-200/80 shadow-sm">
            <h2 className="text-xl font-black text-stone-900 mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#c87037]/10 text-[#c87037] text-xs font-black inline-flex items-center justify-center">2</span>
              Children and Parental Consent
            </h2>
            <p className="mb-4">
              Under the DPDP Act, anyone under 18 is recognized as a child. Because most NeuraliftX learners are school students, we enforce strict compliance:
            </p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Verifiable parental consent first:</strong> We do not process a child's personal data until a parent or lawful guardian has provided verifiable consent during sign-up, authenticated against identity verification details or virtual tokens permitted under the DPDP Rules.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>The parent stays in control:</strong> Parents can view all data held, modify preferences, withdraw consent, or delete the account at any time directly through the app or by contacting us.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Learning data, not behavioral profiling:</strong> We personalize learning solely via academic metrics (answers, test scores, mistakes, and revision needs). Study activity metrics (active days and tasks completed) are utilized solely for the parent's weekly progress digest, and never to profile the child.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>No targeted advertising:</strong> We never display targeted advertisements to children, and we never sell student data.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Safety guarantee:</strong> We never process a child's data in any manner likely to harm their mental or physical well-being. If we discover that data was collected without verifiable consent, it is purged promptly.
                </div>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-white/80 p-6 md:p-8 rounded-3xl border border-stone-200/80 shadow-sm">
            <h2 className="text-xl font-black text-stone-900 mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#c87037]/10 text-[#c87037] text-xs font-black inline-flex items-center justify-center">3</span>
              What We Collect
            </h2>
            <p className="mb-4">
              We collect only what is strictly necessary to teach well and operate the service.
            </p>
            <div className="p-4 rounded-2xl bg-stone-100/80 text-stone-700 text-xs mb-6 border border-stone-200">
              <strong className="block text-stone-900 font-bold mb-1">What we NEVER collect:</strong>
              Precise GPS location, personal address book/contacts, camera photos outside what you actively upload for studies, biometric identification data, external browser activity outside NeuraliftX, or any marketing tracking cookies.
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50/80">
                    <th className="py-2.5 px-3 font-bold text-stone-900">Category</th>
                    <th className="py-2.5 px-3 font-bold text-stone-900">What It Includes</th>
                    <th className="py-2.5 px-3 font-bold text-stone-900">Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-stone-900">Account Data</td>
                    <td className="py-2.5 px-3 text-stone-600">Student's name, class, board, and preferred language; parent's name, email, and mobile number</td>
                    <td className="py-2.5 px-3 text-stone-500">Parent or student at sign-up</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-stone-900">Learning Data</td>
                    <td className="py-2.5 px-3 text-stone-600">Quiz and mock test answers, scores, wrong options chosen, completed topics, revision logs</td>
                    <td className="py-2.5 px-3 text-stone-500">Generated dynamically as student learns</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-stone-900">Syllabus & Material</td>
                    <td className="py-2.5 px-3 text-stone-600">Syllabus PDFs, uploaded chapter notes, handwritten problem photos</td>
                    <td className="py-2.5 px-3 text-stone-500">Uploaded by student or parent</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-stone-900">Questions to Sage</td>
                    <td className="py-2.5 px-3 text-stone-600">Typed queries, transcribed voice queries, and Sage educational replies</td>
                    <td className="py-2.5 px-3 text-stone-500">Student in-session input</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-stone-900">Optional Settings</td>
                    <td className="py-2.5 px-3 text-stone-600">Daily study goal, study reminders, notification choices, career guidance toggle</td>
                    <td className="py-2.5 px-3 text-stone-500">Configured by student or parent</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-stone-900">Technical Data</td>
                    <td className="py-2.5 px-3 text-stone-600">Device model, operating system, app build version, crash logs, IP for security</td>
                    <td className="py-2.5 px-3 text-stone-500">Collected automatically for uptime</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-stone-500 italic">
              *Voice Note: Voice questions are converted to text in real-time to generate responses. We do not retain raw audio recordings once converted to text.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-white/80 p-6 md:p-8 rounded-3xl border border-stone-200/80 shadow-sm">
            <h2 className="text-xl font-black text-stone-900 mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#c87037]/10 text-[#c87037] text-xs font-black inline-flex items-center justify-center">4</span>
              How We Use Your Data
            </h2>
            <p className="mb-4">
              We process personal data solely on the lawful basis of consent under the DPDP Act for specific educational purposes:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50/80">
                    <th className="py-2.5 px-3 font-bold text-stone-900">Purpose</th>
                    <th className="py-2.5 px-3 font-bold text-stone-900">Data Used</th>
                    <th className="py-2.5 px-3 font-bold text-stone-900">Your Choice</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-stone-900">Build course from syllabus</td>
                    <td className="py-2.5 px-3 text-stone-600">Syllabus uploads, class level, academic board</td>
                    <td className="py-2.5 px-3 text-emerald-700 font-bold">Required for service</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-stone-900">Identify weak spots & re-teach</td>
                    <td className="py-2.5 px-3 text-stone-600">Historical learning records & quiz results</td>
                    <td className="py-2.5 px-3 text-emerald-700 font-bold">Required for service</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-stone-900">Answer doubts with Sage tutor</td>
                    <td className="py-2.5 px-3 text-stone-600">Student queries, active chapter reference</td>
                    <td className="py-2.5 px-3 text-emerald-700 font-bold">Required for service</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-stone-900">Suggest careers & affinities</td>
                    <td className="py-2.5 px-3 text-stone-600">Learning competencies by subject</td>
                    <td className="py-2.5 px-3 text-amber-700 font-semibold">Off by default; parent opts in</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-stone-900">Weekly WhatsApp progress report</td>
                    <td className="py-2.5 px-3 text-stone-600">Scores, completion rates, days active</td>
                    <td className="py-2.5 px-3 text-amber-700 font-semibold">Off by default; parent opts in</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-stone-900">Research assistance</td>
                    <td className="py-2.5 px-3 text-stone-600">Research topic and specific query</td>
                    <td className="py-2.5 px-3 text-amber-700 font-semibold">Requires explicit approval per action</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-stone-900">Keep platform safe & functional</td>
                    <td className="py-2.5 px-3 text-stone-600">Technical telemetry & error logs</td>
                    <td className="py-2.5 px-3 text-emerald-700 font-bold">Required for service</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-stone-500">
              *Career guidance is provided as exploratory guidance for the student and parent to discuss, never automated profiling decisions.
            </p>
          </section>

          {/* Section 5 & 6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section className="bg-white/80 p-6 rounded-3xl border border-stone-200/80 shadow-sm">
              <h2 className="text-lg font-black text-stone-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-[#c87037]/10 text-[#c87037] text-xs font-black inline-flex items-center justify-center">5</span>
                AI Processing
              </h2>
              <p className="text-xs text-stone-600 leading-relaxed mb-3">
                NeuraliftX utilizes enterprise AI models to personalize learning and answer student doubts. <strong>Student personal data sent to model inference pipelines is strictly confidential and is NEVER used to train foundational AI models.</strong>
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                We operate on least-privilege context isolation: Sage receives only the active question and syllabus chapter topic, never the student's full identity or account profile.
              </p>
            </section>

            <section className="bg-white/80 p-6 rounded-3xl border border-stone-200/80 shadow-sm">
              <h2 className="text-lg font-black text-stone-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-[#c87037]/10 text-[#c87037] text-xs font-black inline-flex items-center justify-center">6</span>
                Who We Share Data With
              </h2>
              <p className="text-xs text-stone-600 leading-relaxed mb-2">
                We <strong>never sell</strong> personal data. Data is shared exclusively with:
              </p>
              <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-4">
                <li>The consenting parent or guardian.</li>
                <li>The student's school (only if account was provisioned directly by the school).</li>
                <li>Contracted Data Processors under strict DPDP obligations (secure cloud hosting, AI inference, and WhatsApp parent messaging).</li>
                <li>Statutory authorities only when legally mandated under Indian law.</li>
              </ul>
            </section>
          </div>

          {/* Section 7 & 8 */}
          <section className="bg-white/80 p-6 md:p-8 rounded-3xl border border-stone-200/80 shadow-sm">
            <h2 className="text-xl font-black text-stone-900 mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#c87037]/10 text-[#c87037] text-xs font-black inline-flex items-center justify-center">7</span>
              Data Retention & Erasure
            </h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 bg-stone-50/80">
                    <th className="py-2.5 px-3 font-bold text-stone-900">Data Category</th>
                    <th className="py-2.5 px-3 font-bold text-stone-900">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-stone-900">Active account & learning data</td>
                    <td className="py-2.5 px-3 text-stone-600">Retained while the account remains active</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-stone-900">After account deletion / consent withdrawal</td>
                    <td className="py-2.5 px-3 text-stone-600">Permanently erased within <strong>30 days</strong></td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-stone-900">Inactive accounts (12 months no use)</td>
                    <td className="py-2.5 px-3 text-stone-600">Notice sent to parent, then erased after 12 months</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-semibold text-stone-900">Security audit & access logs</td>
                    <td className="py-2.5 px-3 text-stone-600">Retained for at least 1 year as required by DPDP Rules</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-bold text-stone-900 text-sm mb-2 mt-6">8. How We Protect Data</h3>
            <p className="text-xs text-stone-600 leading-relaxed mb-2">
              All personal data is safeguarded with TLS 1.3 encryption in transit and AES-256 encryption at rest. Access is restricted strictly to authorized engineering staff with multi-factor authentication and tamper-evident audit logs.
            </p>
          </section>

          {/* Section 9 & 10 */}
          <section className="bg-white/80 p-6 md:p-8 rounded-3xl border border-stone-200/80 shadow-sm">
            <h2 className="text-xl font-black text-stone-900 mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#c87037]/10 text-[#c87037] text-xs font-black inline-flex items-center justify-center">9</span>
              Breach Notification & Your Rights
            </h2>
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-900 mb-6">
              <strong>Data Breach Protocol:</strong> In the event of a personal data breach, we will notify affected parents and students without delay with actionable guidance, and submit a comprehensive report to the Data Protection Board of India within 72 hours.
            </div>

            <h3 className="font-bold text-stone-900 text-sm mb-3">10. Your Rights under DPDP Act</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
                <strong className="block text-stone-900 font-bold mb-0.5">Right to Access</strong>
                Obtain a complete summary of your personal data and identities of Data Processors.
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
                <strong className="block text-stone-900 font-bold mb-0.5">Right to Correction & Erasure</strong>
                Correct inaccurate records or request total erasure of personal data.
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
                <strong className="block text-stone-900 font-bold mb-0.5">Right to Withdraw Consent</strong>
                Revoke consent at any time as easily as it was given.
              </div>
              <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/70">
                <strong className="block text-stone-900 font-bold mb-0.5">Right of Grievance Redressal</strong>
                File grievances directly with our Grievance Officer, or escalate to the DPB.
              </div>
            </div>
            <p className="mt-4 text-xs text-stone-600">
              To exercise any of these rights, navigate to <strong>Settings &gt; Privacy</strong> in the app or write to us at <a href="mailto:contact@neuraliftx.in" className="text-[#c87037] font-bold underline">contact@neuraliftx.in</a>. We respond within 30 days.
            </p>
          </section>

          {/* Section 11, 12, 13, 14, 15 */}
          <section className="bg-gradient-to-br from-[#FFF5ED] via-[#FDF9F4] to-white p-6 md:p-8 rounded-3xl border border-[#c87037]/30 shadow-sm">
            <h2 className="text-xl font-black text-stone-900 mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#c87037] text-white text-xs font-black inline-flex items-center justify-center">11</span>
              Grievance Redressal & Contact
            </h2>
            <div className="space-y-4 text-xs">
              <p className="text-stone-700">
                If you have questions, concerns, or wish to exercise statutory data rights, reach out directly to our designated Grievance Officer:
              </p>

              <div className="p-4 rounded-2xl bg-white border border-[#c87037]/20 shadow-sm space-y-2">
                <div className="font-bold text-stone-900 text-sm">Annkit Sarkar</div>
                <div className="text-stone-600">Grievance Officer, Alfrin Technologies Private Limited</div>
                <div className="flex flex-wrap gap-4 pt-1">
                  <a href="mailto:contact@neuraliftx.in" className="inline-flex items-center gap-1.5 text-[#c87037] font-bold hover:underline">
                    <Mail size={14} /> contact@neuraliftx.in
                  </a>
                  <a href="tel:+918697319384" className="inline-flex items-center gap-1.5 text-stone-800 font-semibold hover:underline">
                    <Phone size={14} /> +91 8697319384
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-[11px] text-stone-500">
                <div>
                  <strong className="block text-stone-700 font-bold mb-0.5">12. Language:</strong>
                  Available in English; provided on request in any Eighth Schedule language.
                </div>
                <div>
                  <strong className="block text-stone-700 font-bold mb-0.5">13. Global Users:</strong>
                  We honor GDPR and local data protection regulations where applicable.
                </div>
                <div>
                  <strong className="block text-stone-700 font-bold mb-0.5">14. Policy Updates:</strong>
                  Parents will be notified in-app and by email prior to any material change.
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-xs text-stone-400">
          © 2026 Alfrin Technologies Private Limited. All rights reserved.
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
