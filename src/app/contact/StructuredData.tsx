const ContactStructuredData = () => {
  const baseUrl = "https://geminiengineeringworks.in";

  // ContactPage Schema
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${baseUrl}/contact#webpage`,
    url: `${baseUrl}/contact`,
    name: "Contact Us - Gemini Engineering Works",
    description:
      "Contact Gemini Engineering Works for PSC & RCC electric poles. Get quotes, bulk orders, and expert consultation.",
    inLanguage: "en-IN",
    mainEntity: {
      "@type": "Organization",
      name: "Gemini Engineering Works",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-63744-48522",
          contactType: "Customer Service",
          email: "geminienggworks@gmail.com",
          areaServed: "IN",
          availableLanguage: ["en", "ta"],
        },
      ],
      address: [
        {
          "@type": "PostalAddress",
          addressType: "Site",
          streetAddress:
            "SFNO. 27/6F2 Ganesh Nagar, Sathiyamangalam, Kuluthur TK Vellanur",
          addressLocality: "Pudukkottai",
          postalCode: "622501",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
        {
          "@type": "PostalAddress",
          addressType: "Office",
          streetAddress: "1157 housing unit, periya nagar",
          addressLocality: "Pudukkottai",
          postalCode: "622003",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
      ],
    },
  };

  // Breadcrumb Schema for Contact Page
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: `${baseUrl}/contact`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default ContactStructuredData;
