import React, { useEffect } from 'react';

/**
 * Reusable SEO component for dynamic Document title, Meta descriptions,
 * Canonical URL, OpenGraph, and Twitter card metadata.
 */
export default function Seo({ title, description, canonicalUrl }) {
  const defaultTitle = 'DevTools Hub — Free Online Developer Tools';
  const defaultDesc = 'Fast, simple, and privacy-friendly online developer tools. Format JSON, generate UUIDs, encode Base64, convert text cases, and more.';
  const baseUrl = 'https://YOUR_PROJECT.vercel.app'; // Replace with live Vercel URL

  const pageTitle = title ? `${title} | DevTools Hub` : defaultTitle;
  const pageDesc = description || defaultDesc;
  const currentUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;

  useEffect(() => {
    // Document Title
    document.title = pageTitle;

    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDesc);
    }

    // OpenGraph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageDesc);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', currentUrl);

    // Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', currentUrl);
    }
  }, [pageTitle, pageDesc, currentUrl]);

  return null;
}
