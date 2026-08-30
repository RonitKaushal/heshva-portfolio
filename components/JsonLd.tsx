export function JsonLd() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://heshvasoni.vercel.app/#person",
        "name": "Heshva Soni",
        "givenName": "Heshva",
        "familyName": "Soni",
        "url": "https://heshvasoni.vercel.app",
        "image": "https://heshvasoni.vercel.app/images/heshva_portrait.jpg",
        "jobTitle": "Research Intern @ SAC-ISRO | AI & Machine Learning Engineer",
        "description": "IT Student at IAR Gandhinagar and Research Intern at Space Applications Centre, ISRO specializing in Machine Learning, Time Series Analysis, and Geodata.",
        "email": "mailto:heshvasoni1006@gmail.com",
        "worksFor": {
          "@type": "Organization",
          "name": "Space Applications Centre, ISRO",
          "alternateName": "SAC-ISRO",
          "url": "https://www.isro.gov.in"
        },
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "Institute of Advanced Research, Gandhinagar",
            "url": "https://iar.ac.in"
          },
          {
            "@type": "EducationalOrganization",
            "name": "Gujarat Technological University",
            "url": "https://www.gtu.ac.in"
          }
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Ahmedabad",
          "addressRegion": "Gujarat",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 23.0225,
          "longitude": 72.5714
        },
        "sameAs": [
          "https://www.linkedin.com/in/heshvaa",
          "https://github.com/heshvaa",
          "https://heshvasoni.vercel.app"
        ],
        "knowsAbout": [
          "Artificial Intelligence",
          "Machine Learning",
          "Time Series Analysis",
          "Geospatial Data Analysis",
          "Python",
          "Deep Learning",
          "Remote Sensing",
          "Data Analysis",
          "Satellite Earth Observation"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://heshvasoni.vercel.app/#website",
        "url": "https://heshvasoni.vercel.app",
        "name": "Heshva Soni — AI & ML Portfolio",
        "description": "Official portfolio of Heshva Soni, Research Intern at SAC-ISRO and IT student building intelligent solutions with Data & AI.",
        "publisher": {
          "@id": "https://heshvasoni.vercel.app/#person"
        }
      },
      {
        "@type": "ProfilePage",
        "@id": "https://heshvasoni.vercel.app/#webpage",
        "url": "https://heshvasoni.vercel.app",
        "name": "Heshva Soni — Portfolio & Research at SAC-ISRO",
        "isPartOf": {
          "@id": "https://heshvasoni.vercel.app/#website"
        },
        "about": {
          "@id": "https://heshvasoni.vercel.app/#person"
        },
        "mainEntity": {
          "@id": "https://heshvasoni.vercel.app/#person"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
