async function verify() {
  console.log('--- 1. Testing Raw HTML & Schema.org JSON-LD ---');
  const res = await fetch('http://localhost:3000/products/apex-horizon-100');
  const html = await res.text();
  
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  console.log('Status:', res.status);
  console.log('Title:', titleMatch ? titleMatch[1] : 'Not Found');
  console.log('HTML Length:', html.length);
  console.log('Contains Semantic <table>:', html.includes('<table'));
  console.log('Contains -45.2 dB:', html.includes('-45.2 dB'));

  const jsonLdMatch = html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/);
  if (jsonLdMatch) {
    const json = JSON.parse(jsonLdMatch[1]);
    console.log('Schema @type:', json['@type']);
    console.log('Schema Brand:', json.brand.name);
    console.log('Schema SKU:', json.sku);
    console.log('Schema GTIN-13:', json.gtin13);
    console.log('Schema Price:', json.offers.price, json.offers.priceCurrency);
    console.log('Schema Return Days:', json.offers.hasMerchantReturnPolicy.merchantReturnDays);
    console.log('Schema Aggregate Rating:', json.aggregateRating.ratingValue, `(${json.aggregateRating.reviewCount} reviews)`);
  }

  console.log('\n--- 2. Testing /robots.txt (RFC 9309) ---');
  const robotsRes = await fetch('http://localhost:3000/robots.txt');
  const robotsTxt = await robotsRes.text();
  console.log(robotsTxt);

  console.log('\n--- 3. Testing /llms.txt (Jeremy Howard Specification) ---');
  const llmsRes = await fetch('http://localhost:3000/llms.txt');
  const llmsTxt = await llmsRes.text();
  console.log('Status:', llmsRes.status);
  console.log('First 300 chars of /llms.txt:\n' + llmsTxt.substring(0, 300));

  console.log('\n--- 4. Testing Markdown Content Negotiation (Accept: text/markdown) ---');
  const mdRes = await fetch('http://localhost:3000/products/apex-horizon-100', {
    headers: { 'Accept': 'text/markdown' }
  });
  const mdText = await mdRes.text();
  console.log('Status:', mdRes.status);
  console.log('Content-Type:', mdRes.headers.get('content-type'));
  console.log('Is CommonMark (# Apex Horizon):', mdText.includes('# Apex Horizon 100'));
  console.log('Contains Noise-Free Table:', mdText.includes('| Metric | Measured Value |'));
  console.log('First 250 chars of .md stream:\n' + mdText.substring(0, 250));

  console.log('\n--- 5. Testing Direct .md URL (/products/apex-horizon-100.md) ---');
  const directMdRes = await fetch('http://localhost:3000/products/apex-horizon-100.md');
  const directMdText = await directMdRes.text();
  console.log('Status:', directMdRes.status);
  console.log('Content-Type:', directMdRes.headers.get('content-type'));
  console.log('Is CommonMark:', directMdText.includes('# Apex Horizon 100'));

  console.log('\n--- 6. Testing /sitemap.xml ---');
  const sitemapRes = await fetch('http://localhost:3000/sitemap.xml');
  const sitemapXml = await sitemapRes.text();
  console.log('Status:', sitemapRes.status);
  console.log('Contains apex-horizon-100:', sitemapXml.includes('/products/apex-horizon-100'));
  console.log('Contains /llms.txt:', sitemapXml.includes('/llms.txt'));
}

verify().catch(console.error);
