import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const acceptHeader = request.headers.get('accept') || '';

  // Content negotiation for product pages:
  // Match /products/[slug].md or Accept: text/markdown or ?format=md
  const productMatch = pathname.match(/^\/products\/([^/]+)$/);

  if (productMatch) {
    const rawSlug = productMatch[1];
    const isMdExtension = rawSlug.endsWith('.md');
    const isMarkdownAccept = acceptHeader.includes('text/markdown');
    const isFormatMd = searchParams.get('format') === 'md';

    if (isMdExtension || isMarkdownAccept || isFormatMd) {
      const cleanSlug = rawSlug.replace(/\.md$/, '');
      const url = request.nextUrl.clone();
      url.pathname = `/api/markdown/${cleanSlug}`;
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/products/:path*'],
};
