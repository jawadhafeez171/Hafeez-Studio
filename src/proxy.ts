import { NextResponse, type NextRequest } from 'next/server';
import { STUDIO_ORIGIN, TUITION_HOST_PREFIX, TUITION_ORIGIN } from '@/lib/sites';

const STUDIO_HOSTS = new Set(['hafeezstudio.com', 'www.hafeezstudio.com']);

// tuition.<host> serves the tutoring page at its root; the old /tutoring path on the studio domain redirects there.
// Hosts like localhost and Vercel previews keep /tutoring working, and tuition.localhost:<port> mimics the subdomain locally.
export function proxy(request: NextRequest) {
  const host = (request.headers.get('host') ?? '').split(':')[0].toLowerCase();
  const { pathname } = request.nextUrl;
  const isTutoringPath = pathname === '/tutoring' || pathname.startsWith('/tutoring/');

  if (host.startsWith(TUITION_HOST_PREFIX)) {
    if (pathname === '/') {
      const url = request.nextUrl.clone();
      url.pathname = '/tutoring';
      return NextResponse.rewrite(url);
    }
    if (isTutoringPath) {
      // Build from the Host header so the visitor stays on the hostname they used
      const origin = `${request.nextUrl.protocol}//${request.headers.get('host')}`;
      return NextResponse.redirect(new URL('/' + request.nextUrl.search, origin), 301);
    }
    // Studio pages don't live on the tuition subdomain
    return NextResponse.redirect(new URL(pathname + request.nextUrl.search, STUDIO_ORIGIN), 301);
  }

  if (STUDIO_HOSTS.has(host) && isTutoringPath) {
    return NextResponse.redirect(new URL('/' + request.nextUrl.search, TUITION_ORIGIN), 301);
  }

  return NextResponse.next();
}

export const config = {
  // Pages only: skip Next internals, the API, and files with an extension (images, robots.txt, sitemap.xml)
  matcher: ['/((?!_next/|api/|.*\\..*).*)'],
};
