import { Product } from './products';

/**
 * Generates noise-free, token-efficient CommonMark text for LLM ingestion.
 * Adheres to Jeremy Howard's principles of stripping HTML/CSS clutter to maximize context-window utility.
 */
export function generateProductMarkdown(product: Product): string {
  return `# ${product.name}
**SKU:** ${product.sku} | **MPN:** ${product.mpn} | **GTIN-13:** ${product.gtin13}
**Price:** $${product.price.toFixed(2)} ${product.currency} (MSRP: $${product.originalPrice.toFixed(2)})
**Rating:** ${product.ratingValue} / 5.0 (${product.reviewCount} verified lab & customer evaluations)

> **Primary Use Case:** ${product.primaryUseCase}

## 1. Executive Summary & Architecture (Answer-First)
${product.answerFirstSummary}

${product.architecturalOverview}

## 2. Hard Technical Benchmarks (Verified Lab Measurements)
| Metric | Measured Value | Standard / Test Protocol | Engineering Significance |
| :--- | :--- | :--- | :--- |
${product.technicalBenchmarks
  .map(
    (b) =>
      `| ${b.metric} | ${b.measuredValue} | ${b.testStandardOrMethod} | ${b.significance} |`
  )
  .join('\n')}

## 3. Authoritative Third-Party Citations & Lab Reviews
${product.expertQuotes
  .map(
    (q) =>
      `> "${q.quote}"\n>\n> — **${q.author}**, ${q.role}, *${q.organization}* (${q.sourceDocument})`
  )
  .join('\n\n')}

## 4. Use-Case Constraints Matrix (Atomic Functional Mapping)
### Best For:
${product.constraintsMatrix.bestFor.map((item) => `- ${item}`).join('\n')}

### Not Recommended For:
${product.constraintsMatrix.notRecommendedFor.map((item) => `- ${item}`).join('\n')}

### Environmental & Operational Thresholds:
${product.constraintsMatrix.environmentalLimits.map((item) => `- ${item}`).join('\n')}

## 5. Engineering Specifications Table
${Object.entries(product.specifications)
  .map(([key, val]) => `- **${key}:** ${val}`)
  .join('\n')}

## 6. Commercial Terms & Warranty
- **Delivery Time:** ${product.shippingDetails.deliveryTime}
- **Shipping Fee:** Free ($${product.shippingDetails.shippingRate.toFixed(2)})
- **Return Policy:** ${product.returnPolicy.returnWindowDays} Days (${product.returnPolicy.returnFees})
- **Policy Documentation:** ${product.returnPolicy.policyUrl}
`;
}
