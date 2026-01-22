<!-- 4c841b8b-db1a-4128-aac1-848445d60801 d1e17238-6dcb-4d19-8a7a-c2be1a1b2dbe -->
# Full SEO Optimization for PSC & RCC Pole Keywords

## Problem Analysis

Currently ranking 4th-5th for some variations but missing for others because:

- Missing keyword variations in metadata (singular/plural, "tamilnadu" vs "tamil nadu")
- Limited location-specific content on page
- Structured data lacks regional targeting

---

## Implementation Plan

### 1. Enhance Keywords in Metadata

**Files:** [`src/app/layout.tsx`](src/app/layout.tsx), [`src/app/page.tsx`](src/app/page.tsx)

Add missing keyword variations:

```
// PSC variations
"buy psc pole tamil nadu", "buy psc pole tamilnadu",
"buy psc poles tamil nadu", "buy psc poles tamilnadu",
"psc pole suppliers tamil nadu", "psc poles tamilnadu"

// RCC variations
"buy rcc pole tamil nadu", "buy rcc pole tamilnadu",
"buy rcc poles tamil nadu", "buy rcc poles tamilnadu",
"rcc pole suppliers tamil nadu", "rcc poles tamilnadu"

// Combined variations
"electric pole manufacturers tamil nadu",
"concrete pole suppliers tamilnadu"
```

---

### 2. Enhance Page Content with Target Keywords

**Files:** [`src/app/components/Hero.tsx`](src/app/components/Hero.tsx), [`src/app/components/WelcomeSection.tsx`](src/app/components/WelcomeSection.tsx), [`src/app/components/ProductsSection.tsx`](src/app/components/ProductsSection.tsx)

- Update Hero H1 to include "Tamil Nadu" location naturally
- Add keyword-rich paragraph in WelcomeSection mentioning "buy PSC poles" and "buy RCC poles"
- Enhance ProductsSection header with location context
- Add a "Buy PSC & RCC Poles in Tamil Nadu" call-to-action section

---

### 3. Update Structured Data

**File:** [`src/app/components/StructuredData.tsx`](src/app/components/StructuredData.tsx)

- Add "Tamil Nadu" and "Tamilnadu" to product names and descriptions
- Enhance LocalBusiness schema with more location keywords
- Add new FAQ entries targeting "buy psc poles tamil nadu" and "buy rcc poles tamilnadu"
- Update WebPage schema description with regional keywords

---

### 4. Update Title and Description

**Files:** [`src/app/layout.tsx`](src/app/layout.tsx), [`src/app/page.tsx`](src/app/page.tsx)

Update meta title and description to include more keyword variations:

```
Title: "Buy PSC & RCC Poles in Tamil Nadu | Gemini Engineering Works, Pudukkottai"

Description: "Buy PSC poles and RCC poles in Tamil Nadu from Gemini Engineering Works. Leading manufacturer since 1999. Order RCC poles (9m, 150kg), PSC poles (8m-9m, 200-300kg) in Tamilnadu. TNEB approved. Call +91 63744 48522."
```

---

## Target Keyword Matrix

| Keyword | Current Rank | Target Action |

|---------|--------------|---------------|

| buy psc pole tamil nadu | 4th | Metadata + Content |

| buy psc pole tamilnadu | 5th | Add keyword variation |

| buy psc poles tamilnadu | Not found | Add plural + no space |

| buy rcc pole tamil nadu | Unknown | Add variations |

| buy rcc poles tamilnadu | Unknown | Add variations |

---

## Expected Outcome

After implementation:

- Coverage for all singular/plural variations
- Coverage for both "tamilnadu" and "tamil nadu" spellings
- Improved local SEO signals for Tamil Nadu region
- Better structured data for Google's understanding

### To-dos

- [ ] Add all PSC/RCC keyword variations (singular, plural, tamilnadu, tamil nadu) to layout.tsx and page.tsx metadata
- [ ] Update meta title and description with location keywords in layout.tsx and page.tsx
- [ ] Enhance Hero.tsx H1 and subtext with Tamil Nadu location naturally
- [ ] Add keyword-rich "buy poles" content to WelcomeSection.tsx
- [ ] Enhance ProductsSection.tsx with location-specific header text
- [ ] Update StructuredData.tsx with Tamil Nadu keywords in products, FAQs, and schemas