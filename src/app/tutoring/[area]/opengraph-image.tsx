import { areaBySlug, areaPages } from '../areas';
import { ogSize, renderTutorOg } from '../og';

export const size = ogSize;
export const contentType = 'image/png';
export const alt = 'Hafeez Tutor: Maths and Physics home tuition in Bangalore for Classes 8 to 10.';

export function generateStaticParams() {
  return areaPages.map((a) => ({ area: a.slug }));
}

// Each area's link preview names that area
export default async function Image({ params }: { params: Promise<{ area: string }> }) {
  const area = areaBySlug.get((await params).area);
  const name = area?.name ?? 'Bangalore';
  return renderTutorOg({
    lines: [`Maths and Physics home tutor`, `in ${name}, Classes 8 to 10.`],
    footer: `One-to-one at your home in ${name} · CBSE, ICSE, IGCSE`,
  });
}
