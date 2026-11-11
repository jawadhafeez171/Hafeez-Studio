import { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { STUDIO_ORIGIN, TUITION_HOST_PREFIX, TUITION_ORIGIN } from '@/lib/sites';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = ((await headers()).get('host') ?? '').toLowerCase();
  const baseUrl = host.startsWith(TUITION_HOST_PREFIX) ? TUITION_ORIGIN : STUDIO_ORIGIN;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
