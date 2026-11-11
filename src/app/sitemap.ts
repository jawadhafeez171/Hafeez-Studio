import { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { STUDIO_ORIGIN, TUITION_HOST_PREFIX, TUITION_ORIGIN } from '@/lib/sites';
import { areaPages } from '@/app/tutoring/areas';

// Each host lists only its own pages: the studio home, or the tuition home and its area pages
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = ((await headers()).get('host') ?? '').toLowerCase();
  const isTuition = host.startsWith(TUITION_HOST_PREFIX);
  const lastModified = new Date();

  if (!isTuition) {
    return [{ url: `${STUDIO_ORIGIN}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 }];
  }

  return [
    { url: `${TUITION_ORIGIN}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    ...areaPages.map((a) => ({
      url: `${TUITION_ORIGIN}/${a.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
