const StructuredData = () => {
  const baseUrl = "https://geminiengineeringworks.in";

  // Organization Schema with comprehensive details
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ManufacturingBusiness",
    "@id": `${baseUrl}/#organization`,
    name: "Gemini Engineering Works",
    alternateName: "Gemini Engg Works",
    url: baseUrl,
    logo: `${baseUrl}/logo.webp`,
    image: `${baseUrl}/logo.webp`,
    description:
      "Buy PSC poles and RCC poles in Tamil Nadu from Gemini Engineering Works, Pudukkottai. Leading manufacturer since 1999. Buy PSC pole tamilnadu, buy PSC pole TamilNadu, buy RCC pole tamil nadu, buy RCC pole Tamilnadu. Order RCC poles (9m, 150kg), PSC poles (8m-9m, 200-300kg). TNEB approved supplier. Bulk orders welcome.",
    foundingDate: "1999",
    founder: {
      "@type": "Person",
      name: "AS. Manikandan",
    },
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
    sameAs: [],
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: [
      "Electric Pole Manufacturing",
      "RCC Pole Production",
      "PSC Pole Production",
      "TNEB Standards",
      "Infrastructure Development",
      "Power Distribution",
      "Buy PSC Poles Tamil Nadu",
      "Buy PSC Poles Tamilnadu",
      "Buy PSC Poles TamilNadu",
      "Buy RCC Poles Tamil Nadu",
      "Buy RCC Poles Tamilnadu",
      "Buy RCC Poles TamilNadu",
      "Electric Pole Suppliers Tamil Nadu",
      "Electric Pole Suppliers Tamilnadu",
      "PSC Pole Price Tamil Nadu",
      "RCC Pole Price Tamilnadu",
    ],
    slogan: "Planting the Seeds of Light",
  };

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: "Gemini Engineering Works",
    description:
      "Buy PSC poles and RCC poles in Tamil Nadu. Buy PSC pole tamilnadu, buy RCC pole TamilNadu. Leading PSC pole and RCC pole manufacturer in Pudukkottai, Tamilnadu since 1999. TNEB approved supplier.",
    image: `${baseUrl}/logo.webp`,
    url: baseUrl,
    telephone: "+91-63744-48522",
    email: "geminienggworks@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "SFNO. 27/6F2 Ganesh Nagar, Sathiyamangalam, Kuluthur TK Vellanur",
      addressLocality: "Pudukkottai",
      postalCode: "622501",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "10.4763535",
      longitude: "78.7853814",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "$$",
  };

  // Detailed Product Schemas
  const productSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "9 Metre RCC Pole (150kg) - Buy RCC Pole Tamil Nadu",
      description:
        "Buy 9-metre RCC Pole in Tamil Nadu with 150kg working load. Ideal for electrical distribution projects in Tamilnadu. Manufactured with M25 grade concrete. Buy RCC poles from Gemini Engineering Works, Pudukkottai.",
      image: `${baseUrl}/logo.webp`,
      brand: {
        "@type": "Brand",
        name: "Gemini Engineering Works",
      },
      category: "Electric Pole",
      sku: "RCC-9M-150KG",
      
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "127",
        reviewCount: "89",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Length",
          value: "9 metres",
        },
        {
          "@type": "PropertyValue",
          name: "Working Load",
          value: "150kg",
        },
        {
          "@type": "PropertyValue",
          name: "Ultimate Load",
          value: "300kg",
        },
        {
          "@type": "PropertyValue",
          name: "Concrete Grade",
          value: "M25",
        },
        {
          "@type": "PropertyValue",
          name: "Concrete Volume",
          value: "0.285m³",
        },
        {
          "@type": "PropertyValue",
          name: "Weight",
          value: "700kg (approx)",
        },
        {
          "@type": "PropertyValue",
          name: "Top Dimensions",
          value: "12.5cm × 12.5cm",
        },
        {
          "@type": "PropertyValue",
          name: "Bottom Dimensions",
          value: "22.5cm × 22.5cm",
        },
        {
          "@type": "PropertyValue",
          name: "Planting Depth",
          value: "1.70m",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "9 Metre PSC Pole (300kg WL) - Buy PSC Pole Tamil Nadu",
      description:
        "Buy 9.0 metre PSC pole in Tamil Nadu with 300kg working load. Buy PSC poles tamilnadu from Gemini Engineering Works. M40 grade concrete, reinforced with 16 Nos. of 4mm HTS wires. TNEB approved.",
      image: `${baseUrl}/logo.webp`,
      brand: {
        "@type": "Brand",
        name: "Gemini Engineering Works",
      },
      category: "Electric Pole",
      sku: "PSC-9M-300KG",
      
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "156",
        reviewCount: "112",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Length",
          value: "9.00m",
        },
        {
          "@type": "PropertyValue",
          name: "Working Load",
          value: "300kg",
        },
        {
          "@type": "PropertyValue",
          name: "Concrete Grade",
          value: "M40",
        },
        {
          "@type": "PropertyValue",
          name: "Concrete Volume",
          value: "0.243m³",
        },
        {
          "@type": "PropertyValue",
          name: "Weight",
          value: "607kg (approx)",
        },
        {
          "@type": "PropertyValue",
          name: "Top Dimensions",
          value: "18.5cm × 10.0cm",
        },
        {
          "@type": "PropertyValue",
          name: "Bottom Dimensions",
          value: "35.5cm × 10.0cm",
        },
        {
          "@type": "PropertyValue",
          name: "Reinforcement",
          value: "16 Nos. of 4mm HTS wires (all tensioned)",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "8m PSC Pole (200kg WL) - Buy PSC Pole Tamilnadu",
      description:
        "Buy 8.00m PSC pole in Tamilnadu with 200kg working load. Buy PSC poles tamil nadu from Gemini Engineering Works, Pudukkottai. M42 grade concrete, reinforced with 14 Nos. of 4mm HTS wires.",
      image: `${baseUrl}/logo.webp`,
      brand: {
        "@type": "Brand",
        name: "Gemini Engineering Works",
      },
      category: "Electric Pole",
      sku: "PSC-8M-200KG",
     
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "143",
        reviewCount: "98",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Length",
          value: "8.00m",
        },
        {
          "@type": "PropertyValue",
          name: "Working Load",
          value: "200kg",
        },
        {
          "@type": "PropertyValue",
          name: "Concrete Grade",
          value: "M42",
        },
        {
          "@type": "PropertyValue",
          name: "Concrete Volume",
          value: "0.156m³",
        },
        {
          "@type": "PropertyValue",
          name: "Weight",
          value: "378kg (approx)",
        },
        {
          "@type": "PropertyValue",
          name: "Top Dimensions",
          value: "14.5cm × 9cm",
        },
        {
          "@type": "PropertyValue",
          name: "Bottom Dimensions",
          value: "29.0cm × 9cm",
        },
        {
          "@type": "PropertyValue",
          name: "Thickness",
          value: "9.0cm",
        },
        {
          "@type": "PropertyValue",
          name: "Reinforcement",
          value: "14 Nos. of 4mm HTS wires (12 tensioned, 2 untensioned)",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "RCC Base Plate 450mm × 450mm × 75mm - Tamil Nadu",
      description:
        "Buy RCC base plates in Tamil Nadu for electric pole foundation support. High-quality base plates manufactured in Tamilnadu with M15 grade concrete and HTS wire reinforcement.",
      image: `${baseUrl}/logo.webp`,
      brand: {
        "@type": "Brand",
        name: "Gemini Engineering Works",
      },
      category: "Base Plate",
      sku: "RCC-BASE-450X450X75",
     
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "89",
        reviewCount: "62",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Dimensions",
          value: "450mm × 450mm × 75mm",
        },
        {
          "@type": "PropertyValue",
          name: "Weight",
          value: "37.40kg (approx)",
        },
        {
          "@type": "PropertyValue",
          name: "Concrete Grade",
          value: "M15",
        },
        {
          "@type": "PropertyValue",
          name: "Concrete Volume",
          value: "0.0152m³",
        },
        {
          "@type": "PropertyValue",
          name: "Reinforcement",
          value: "4mm HTS wire @ 50mm c/c",
        },
        {
          "@type": "PropertyValue",
          name: "Clear Cover",
          value: "25mm",
        },
      ],
    },
  ];

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "PSC & RCC Pole Manufacturing Tamil Nadu",
    provider: {
      "@type": "ManufacturingBusiness",
      name: "Gemini Engineering Works",
    },
    areaServed: [
      {
        "@type": "State",
        name: "Tamil Nadu",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    description:
      "Buy PSC poles and RCC poles in Tamil Nadu. Manufacturing of high-quality PSC and RCC electric poles in Tamilnadu for power distribution and infrastructure development. IS 1678:1998 compliant, TNEB approved.",
    offers: {
      "@type": "Offer",
      description:
        "Buy PSC poles and RCC poles in Tamil Nadu. Bulk supply for government and private projects.",
    },
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of electric poles do you manufacture?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We manufacture RCC (Reinforced Cement Concrete) poles and PSC (Prestressed Concrete) poles. Our product range includes 9m RCC poles with 150kg working load, 8m PSC poles with 200kg working load, 9m PSC poles with 300kg working load, and RCC base plates (450mm × 450mm × 75mm).",
        },
      },
      {
        "@type": "Question",
        name: "Are your poles compliant with industry standards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, all our poles are manufactured as per IS 1678:1998 standards and undergo rigorous load testing, bending tests, and crack resistance tests before dispatch. We also comply with TNEB (Tamil Nadu Electricity Board) specifications.",
        },
      },
      {
        "@type": "Question",
        name: "What is the lifespan of your electric poles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our RCC and PSC poles are corrosion-free and require minimal maintenance. With a lifespan of 30-40 years, they offer excellent value for power distribution and electrification projects.",
        },
      },
      {
        "@type": "Question",
        name: "Do you supply to TNEB yards?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we are a proud supplier to TNEB (Tamil Nadu Electricity Board) yards. We serve power distribution companies and contractors across regions, supporting both government and private infrastructure projects.",
        },
      },
      {
        "@type": "Question",
        name: "What is your manufacturing capacity?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With over 25 years of experience and state-of-the-art manufacturing facilities, we have manufactured over 3 lakh poles. We are capable of meeting large-scale departmental tenders on tight deadlines.",
        },
      },
      {
        "@type": "Question",
        name: "Where is your manufacturing facility located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our manufacturing facility is located at SFNO. 27/6F2 Ganesh Nagar, Sathiyamangalam, Kuluthur TK Vellanur, Pudukkottai - 622501, Tamil Nadu. We also have an office at 1157 housing unit, periya nagar, Pudukkottai - 622003.",
        },
      },
      {
        "@type": "Question",
        name: "How can I buy RCC or PSC poles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can buy RCC and PSC poles by contacting us at +91 63744 48522 or emailing geminienggworks@gmail.com. We accept bulk orders and provide competitive pricing. Visit our contact page to get a quote or place an order.",
        },
      },
      {
        "@type": "Question",
        name: "Can I buy electric poles online?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can buy electric poles online by contacting us through our website. Call +91 63744 48522 or email geminienggworks@gmail.com to place your order. We provide quotes and accept bulk orders for RCC and PSC poles.",
        },
      },
      {
        "@type": "Question",
        name: "What is the price of RCC and PSC poles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pole prices vary based on specifications, quantity, and delivery location. Contact us at +91 63744 48522 or email geminienggworks@gmail.com for competitive pricing quotes. We offer special rates for bulk orders.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver poles after purchase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide delivery services for purchased poles. We can arrange transportation to your location. Contact us at +91 63744 48522 to discuss delivery options and get a quote including delivery charges.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I buy PSC poles in Tamil Nadu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can buy PSC poles in Tamil Nadu from Gemini Engineering Works, Pudukkottai. We are a leading PSC pole manufacturer in Tamilnadu since 1999. Contact us at +91 63744 48522 to buy PSC poles. We offer 8m PSC poles (200kg) and 9m PSC poles (300kg).",
        },
      },
      {
        "@type": "Question",
        name: "Where can I buy RCC poles in Tamilnadu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Buy RCC poles in Tamilnadu from Gemini Engineering Works, located in Pudukkottai, Tamil Nadu. We manufacture high-quality 9m RCC poles with 150kg working load. Call +91 63744 48522 to place your order for RCC poles.",
        },
      },
      {
        "@type": "Question",
        name: "Which is the best PSC pole manufacturer in Tamil Nadu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gemini Engineering Works is a trusted PSC pole manufacturer in Tamil Nadu with over 25 years of experience. Based in Pudukkottai, we are TNEB approved and have manufactured over 3 lakh poles. Buy PSC poles in tamilnadu from us for quality and reliability.",
        },
      },
      {
        "@type": "Question",
        name: "Which is the best RCC pole supplier in Tamilnadu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gemini Engineering Works is among the best RCC pole suppliers in Tamilnadu. Located in Pudukkottai, Tamil Nadu, we manufacture IS 1678:1998 compliant RCC poles. Buy RCC poles in tamil nadu from us for competitive pricing and quality assurance.",
        },
      },
      {
        "@type": "Question",
        name: "Where to buy PSC poles in TamilNadu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Buy PSC poles in TamilNadu from Gemini Engineering Works, Pudukkottai. We are TNEB approved PSC pole manufacturers in Tamil Nadu since 1999. Buy PSC pole tamilnadu, buy PSC poles Tamilnadu. Call +91 63744 48522 for best prices.",
        },
      },
      {
        "@type": "Question",
        name: "Where to buy RCC poles in TamilNadu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Buy RCC poles in TamilNadu from Gemini Engineering Works. We are leading RCC pole manufacturers in Tamilnadu, Tamil Nadu. Buy RCC pole tamilnadu, buy RCC poles TamilNadu with best quality. Call +91 63744 48522.",
        },
      },
      {
        "@type": "Question",
        name: "What is PSC pole price in Tamil Nadu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PSC pole price in Tamil Nadu varies based on size and specifications. Buy PSC poles in tamilnadu from Gemini Engineering Works for competitive pricing. We offer 8m PSC poles (200kg) and 9m PSC poles (300kg). Contact +91 63744 48522 for PSC pole price tamilnadu.",
        },
      },
      {
        "@type": "Question",
        name: "What is RCC pole price in Tamilnadu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RCC pole price in Tamilnadu depends on specifications and quantity. Buy RCC poles in TamilNadu from Gemini Engineering Works for best rates. We manufacture 9m RCC poles (150kg). Contact +91 63744 48522 for RCC pole price tamil nadu.",
        },
      },
      {
        "@type": "Question",
        name: "How to purchase PSC pole in Tamilnadu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To purchase PSC pole in Tamilnadu, contact Gemini Engineering Works at +91 63744 48522 or email geminienggworks@gmail.com. We are TNEB approved PSC pole manufacturers in Pudukkottai, Tamil Nadu. Purchase PSC poles directly from our manufacturing facility. Bulk orders welcome for purchase.",
        },
      },
      {
        "@type": "Question",
        name: "How to purchase RCC pole in Tamil Nadu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Purchase RCC pole in Tamil Nadu from Gemini Engineering Works. Call +91 63744 48522 to purchase RCC poles directly from manufacturer. We offer 9m RCC poles (150kg working load). Easy purchase process with delivery across Tamilnadu. Purchase RCC pole for your infrastructure projects.",
        },
      },
      {
        "@type": "Question",
        name: "Can I purchase PSC poles directly from manufacturer in TamilNadu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can purchase PSC poles directly from Gemini Engineering Works in Tamilnadu. As manufacturers since 1999, we offer direct purchase of PSC poles at competitive rates. Purchase PSC pole tamilnadu directly without middlemen. Visit our Pudukkottai facility or call +91 63744 48522 to purchase.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum quantity to purchase electric poles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can purchase electric poles in any quantity from Gemini Engineering Works. Whether you need to purchase a single PSC pole or RCC pole, or bulk purchase for large projects, we accommodate all orders. Contact +91 63744 48522 to discuss your purchase requirements in Tamil Nadu.",
        },
      },
      {
        "@type": "Question",
        name: "Where to purchase PSC pole in Pudukkottai district?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Purchase PSC pole in Pudukkottai district from Gemini Engineering Works. Our manufacturing facility is at SFNO. 27/6F2 Ganesh Nagar, Sathiyamangalam, Kuluthur TK Vellanur, Pudukkottai. Call +91 63744 48522 to purchase PSC poles directly from our Pudukkottai factory.",
        },
      },
      {
        "@type": "Question",
        name: "Is it easy to purchase poles for TNEB projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, purchasing poles for TNEB projects is easy with Gemini Engineering Works. We are TNEB approved suppliers. Purchase PSC poles and RCC poles that meet all TNEB specifications. Call +91 63744 48522 to purchase poles for your TNEB contracted projects in Tamilnadu.",
        },
      },
    ],
  };

  // WebPage Schema for Home
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/#webpage`,
    url: baseUrl,
    name: "Buy PSC & RCC Poles in Tamil Nadu | Gemini Engineering Works",
    description:
      "Buy PSC poles and RCC poles in Tamil Nadu from Gemini Engineering Works. Buy PSC pole tamilnadu, buy RCC pole tamil nadu. Order RCC poles (9m, 150kg), PSC poles (8m-9m, 200-300kg) in Tamilnadu. TNEB approved. Call +91 63744 48522.",
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      name: "Gemini Engineering Works - Buy PSC & RCC Poles Tamil Nadu",
      url: baseUrl,
    },
    about: {
      "@type": "Thing",
      name: "Buy PSC Poles and RCC Poles in Tamil Nadu",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.webp`,
    },
  };

  // Breadcrumb Schema
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
    ],
  };

  // ItemList Schema for Products
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Buy PSC & RCC Poles in Tamil Nadu",
    description:
      "Buy PSC poles and RCC poles in Tamil Nadu. Complete range of electric poles manufactured by Gemini Engineering Works, Pudukkottai, Tamilnadu.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "9 Metre RCC Pole (150kg)",
        url: `${baseUrl}/#products`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "9 metre PSC Pole (300kg WL)",
        url: `${baseUrl}/#products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "8 metre PSC Pole (200kg WL)",
        url: `${baseUrl}/#products`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "RCC Base Plate 450mm × 450mm × 75mm",
        url: `${baseUrl}/#products`,
      },
    ],
  };

  // HowTo Schema for Purchase Process - targets "purchase psc pole tamilnadu"
  const howToPurchasePSCSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Purchase PSC Pole in Tamilnadu",
    description:
      "Step-by-step guide to purchase PSC poles in Tamil Nadu from Gemini Engineering Works, the leading PSC pole manufacturer in Pudukkottai.",
    totalTime: "PT30M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "INR",
      value: "Contact for pricing",
    },
    supply: [
      {
        "@type": "HowToSupply",
        name: "Project specifications",
      },
      {
        "@type": "HowToSupply",
        name: "Quantity requirements",
      },
    ],
    tool: [
      {
        "@type": "HowToTool",
        name: "Phone or Email for contact",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: "Contact Gemini Engineering Works",
        text: "Call +91 63744 48522 or email geminienggworks@gmail.com to purchase PSC poles in Tamilnadu",
        url: `${baseUrl}/#contact`,
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Specify Your Requirements",
        text: "Tell us the PSC pole specifications: 8m (200kg) or 9m (300kg) and quantity needed for your purchase",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Get a Quote",
        text: "Receive competitive pricing for your PSC pole purchase in Tamil Nadu",
        position: 3,
      },
      {
        "@type": "HowToStep",
        name: "Confirm Purchase Order",
        text: "Confirm your purchase order for PSC poles with delivery details",
        position: 4,
      },
      {
        "@type": "HowToStep",
        name: "Receive Delivery",
        text: "Get your purchased PSC poles delivered to your location in Tamilnadu",
        position: 5,
      },
    ],
  };

  // HowTo Schema for Purchase RCC Poles
  const howToPurchaseRCCSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Purchase RCC Pole in Tamil Nadu",
    description:
      "Complete guide to purchase RCC poles in Tamil Nadu from Gemini Engineering Works, trusted RCC pole manufacturer since 1999.",
    totalTime: "PT30M",
    step: [
      {
        "@type": "HowToStep",
        name: "Contact for RCC Pole Purchase",
        text: "Call +91 63744 48522 to purchase RCC poles in Tamil Nadu. Email: geminienggworks@gmail.com",
        url: `${baseUrl}/#contact`,
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: "Specify RCC Pole Requirements",
        text: "Provide specifications for 9m RCC poles (150kg working load) and quantity for purchase",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: "Receive Purchase Quote",
        text: "Get competitive pricing quote for RCC pole purchase in Tamilnadu",
        position: 3,
      },
      {
        "@type": "HowToStep",
        name: "Complete Purchase",
        text: "Finalize your RCC pole purchase order with Gemini Engineering Works",
        position: 4,
      },
    ],
  };

  // Speakable Schema for Voice Search
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".hero-text"],
    },
    name: "Purchase PSC Pole Tamilnadu - Gemini Engineering Works",
    description:
      "Purchase PSC poles and RCC poles in Tamilnadu from Gemini Engineering Works. Call +91 63744 48522 to purchase electric poles in Tamil Nadu.",
  };

  // Store Schema for E-commerce visibility
  const storeSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Gemini Engineering Works - Buy PSC & RCC Poles Tamil Nadu",
    description:
      "Buy PSC poles and RCC poles in Tamil Nadu. Leading electric pole manufacturer in Pudukkottai, Tamilnadu since 1999. TNEB approved supplier.",
    image: `${baseUrl}/logo.webp`,
    "@id": `${baseUrl}/#store`,
    url: baseUrl,
    telephone: "+91-63744-48522",
    email: "geminienggworks@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "SFNO. 27/6F2 Ganesh Nagar, Sathiyamangalam, Kuluthur TK Vellanur",
      addressLocality: "Pudukkottai",
      postalCode: "622501",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "10.4763535",
      longitude: "78.7853814",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "$$",
    paymentAccepted: "Cash, Bank Transfer, Cheque",
    currenciesAccepted: "INR",
  };

  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      {/* Product Schemas */}
      {productSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* WebPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* ItemList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {/* Store Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(storeSchema) }}
      />
      {/* HowTo Schema - Purchase PSC Pole */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToPurchasePSCSchema),
        }}
      />
      {/* HowTo Schema - Purchase RCC Pole */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToPurchaseRCCSchema),
        }}
      />
      {/* Speakable Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />
    </>
  );
};

export default StructuredData;
