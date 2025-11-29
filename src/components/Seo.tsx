import React from 'react';
import { Helmet } from 'react-helmet-async';

export const Seo: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Omeir Mustafa",
    "jobTitle": "Full-Stack AI Engineer",
    "url": "https://omeir.dev", 
    "sameAs": [
      "https://linkedin.com/in/omeirmustafa",
      "https://github.com/omeirmustafa",
      "https://twitter.com/omeirmustafa"
    ],
    "knowsAbout": ["Artificial Intelligence", "React", "TypeScript", "LLM Engineering", "UX Design"]
  };

  return (
    <Helmet>
      <title>Omeir Mustafa | AI Engineer & Full-Stack Architect</title>
      <meta name="description" content="Omeir Mustafa is a Full-Stack AI Engineer specializing in building agency-grade web applications and LLM-powered tools like InsightMesh." />
      <meta name="keywords" content="AI builder, InsightMesh, prompt engineering, LLM tools, micro-SaaS, AI portfolio, React developer" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Omeir Mustafa | Bridging Intent & Intelligence" />
      <meta property="og:description" content="Explore the portfolio of Omeir Mustafa. Featuring InsightMesh, a real-time AI processing engine." />
      <meta property="og:image" content="https://omeir.dev/og-image.png" />
      <meta property="og:url" content="https://omeir.dev" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Omeir Mustafa | AI Engineer" />
      <meta name="twitter:description" content="Crafting the future of software with React and Artificial Intelligence." />
      <meta name="twitter:image" content="https://omeir.dev/og-image.png" />

      {/* Canonical */}
      <link rel="canonical" href="https://omeir.dev" />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};