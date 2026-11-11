import { NextResponse, type NextRequest } from 'next/server';
import { TUITION_HOST_PREFIX, TUITION_ORIGIN } from '@/lib/sites';
import { areaPages } from '@/app/tutoring/areas';

const STUDIO_HOSTS = new Set(['hafeezstudio.com', 'www.hafeezstudio.com']);
const AREA_SLUGS = new Set(areaPages.map((a) => a.slug));

// tuition.<host> serves the tutoring page at its root; the old /tutoring path on the studio domain redirects there.
// Hosts like localhost and Vercel previews keep /tutoring working, and tuition.localhost:<port> mimics the subdomain locally.
export function proxy(request: NextRequest) {
  const host = (request.headers.get('host') ?? '').split(':')[0].toLowerCase();
  const { pathname } = request.nextUrl;
  const isTutoringPath = pathname === '/tutoring' || pathname === '/tutoring/';

  if (host.startsWith(TUITION_HOST_PREFIX)) {
    if (pathname === '/') {
      const url = request.nextUrl.clone();
      url.pathname = '/tutoring';
      return NextResponse.rewrite(url);
    }
    // Area pages live at /<area> on the subdomain
    if (AREA_SLUGS.has(pathname.slice(1))) {
      const url = request.nextUrl.clone();
      url.pathname = `/tutoring${pathname}`;
      return NextResponse.rewrite(url);
    }
    // Generated files under the route (e.g. its share images) are served as they are
    if (pathname.startsWith('/tutoring/')) return NextResponse.next();
    if (isTutoringPath) {
      // Build from the Host header so the visitor stays on the hostname they used
      const origin = `${request.nextUrl.protocol}//${request.headers.get('host')}`;
      return NextResponse.redirect(new URL('/' + request.nextUrl.search, origin), 301);
    }
    // Anything else is not a tuition page: let the tutoring route answer it with its own 404
    const url = request.nextUrl.clone();
    url.pathname = `/tutoring${pathname}`;
    return NextResponse.rewrite(url);
  }

  if (STUDIO_HOSTS.has(host) && isTutoringPath) {
    return NextResponse.redirect(new URL('/' + request.nextUrl.search, TUITION_ORIGIN), 301);
  }
  // An area page reached through the studio domain moves to its address on the subdomain
  const studioAreaSlug = pathname.startsWith('/tutoring/') ? pathname.slice('/tutoring/'.length) : '';
  if (STUDIO_HOSTS.has(host) && AREA_SLUGS.has(studioAreaSlug)) {
    return NextResponse.redirect(new URL(`/${studioAreaSlug}${request.nextUrl.search}`, TUITION_ORIGIN), 301);
  }

  return NextResponse.next();
}

export const config = {
  // Pages only: skip Next internals, the API, and files with an extension (images, robots.txt, sitemap.xml)
  matcher: ['/((?!_next/|api/|.*\\..*).*)'],
};
