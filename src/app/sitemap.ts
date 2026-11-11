import { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { STUDIO_ORIGIN, TUITION_HOST_PREFIX, TUITION_ORIGIN } from '@/lib/sites';

// Each host lists only its own pages: the studio home, or the tuition home
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = ((await headers()).get('host') ?? '').toLowerCase();
  const isTuition = host.startsWith(TUITION_HOST_PREFIX);

  return [
    {
      url: `${isTuition ? TUITION_ORIGIN : STUDIO_ORIGIN}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
