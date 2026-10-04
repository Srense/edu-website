import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * SEO Component for NeuraliftX Website
 */
const SEO = ({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  canonicalUrl
}) => {
  const siteName = 'NeuraliftX';
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName}: Learn without Boundaries.`;
  const defaultDescription = 'NeuraliftX is an AI platform ensuring human intelligence scales alongside artificial intelligence — verified, personalized, and trusted.';
  const defaultKeywords = 'NeuraliftX, AI education, personalized learning, Intelexta Protocol, intelligence analytics';
  const siteUrl = 'https://neuraliftx.in'; 
  const defaultOgImage = `${siteUrl}/og-image.png`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Social Media */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:image" content={ogImage || defaultOgImage} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || defaultOgImage} />
    </Helmet>
  );
};

export default SEO;
