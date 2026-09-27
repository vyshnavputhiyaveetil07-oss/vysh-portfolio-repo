import React, { useEffect } from 'react';
import { profileData } from '../data/profile';

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Vyshnav Puthiyaveetil Kurikkalkandi | Data Analyst | Business Analyst | London",
  description = "MSc Business Analytics graduate in London targeting Data Analyst, Business Analyst and Business Intelligence opportunities across the UK."
}) => {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Schema.org Structured Data
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": profileData.fullName,
      "jobTitle": profileData.title,
      "worksFor": {
        "@type": "Organization",
        "name": profileData.currentRole
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": profileData.university
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressCountry": "UK"
      },
      "sameAs": [
        profileData.contact.linkedin,
        profileData.contact.github
      ],
      "knowsAbout": [
        "Business Analytics",
        "Data Analysis",
        "Business Intelligence",
        "SQL",
        "Python",
        "Microsoft Power BI",
        "Microsoft Excel",
        "Tableau"
      ]
    };

    let scriptTag = document.querySelector('#schema-structured-data');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('id', 'schema-structured-data');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(personSchema);

  }, [title, description]);

  return null;
};
