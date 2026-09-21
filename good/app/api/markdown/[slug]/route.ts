import { NextRequest, NextResponse } from 'next/server';
import { getProductBySlug } from '@/lib/products';
import { generateProductMarkdown } from '@/lib/markdown';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  
  // Strip .md extension if present
  const cleanSlug = slug.replace(/\.md$/, '');
  const product = getProductBySlug(cleanSlug);

  if (!product) {
    return new NextResponse('Product not found in ApexAcoustics catalogue.', {
      status: 404,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  const markdown = generateProductMarkdown(product);

  return new NextResponse(markdown, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
      'X-LLM-Context-Standard': 'Jeremy-Howard-AnswerAI-2024',
    },
  });
}
