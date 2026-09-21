import { MetadataRoute } from 'next';

/**
 * Surgical Crawler Management (RFC 9309 compliant)
 * Explicitly allows live AI search discovery bots (OAI-SearchBot, PerplexityBot, ChatGPT-User)
 * while managing training crawlers without severing conversational search visibility.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://apexacoustics.com';

  return {
    rules: [
      // Standard search engine discovery
      {
        userAgent: ['Googlebot', 'Bingbot', 'Applebot'],
        allow: '/',
        disallow: ['/api/private/', '/checkout/'],
      },
      // Real-Time Generative Search Grounding Agents (CRITICAL FOR LIVE AI VISIBILITY)
      {
        userAgent: ['OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot'],
        allow: '/',
        disallow: ['/api/private/', '/checkout/'],
      },
      // Bulk Foundation Model Training Crawlers (Controlled access without blocking search)
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'CCBot'],
        allow: ['/llms.txt', '/llms-full.txt', '/products/'],
        disallow: ['/api/', '/checkout/'],
      },
      // Default rule for all other agents
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/private/', '/checkout/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
