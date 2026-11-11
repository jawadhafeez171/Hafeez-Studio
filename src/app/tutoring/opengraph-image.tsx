import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt =
  'Hafeez Tutor: Maths and Physics home tuition for Classes 8 to 10 in Bangalore. ₹600 an hour, first class free.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Atkinson Hyperlegible Next (SIL Open Font License), the page's own face, as TTF for the image renderer
const font = (file: string) => readFile(join(process.cwd(), 'src/app/tutoring/_og', file));

// The link preview matches the page: the headline in ink on white, the price in green
export default async function OpenGraphImage() {
  const [regular, bold, italic] = await Promise.all([
    font('atkinson-next-regular.ttf'),
    font('atkinson-next-bold.ttf'),
    font('atkinson-next-italic.ttf'),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '68px 80px',
          background: '#FFFFFF',
          color: '#16211C',
          fontFamily: 'Atkinson',
        }}
      >
        <div style={{ display: 'flex', fontSize: 36, fontWeight: 700 }}>
          Hafeez Tutor
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 62, fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.02em' }}>
            <span>Maths and Physics home tuition</span>
            <span>for Classes 8 to 10.</span>
          </div>
          <div style={{ display: 'flex', marginTop: 30, fontSize: 44, fontWeight: 700, color: '#1F6B48' }}>
            ₹600 an hour · First class free
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 30, color: '#4D5A53' }}>
          One-to-one at your home in Bangalore · CBSE, ICSE, IGCSE
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Atkinson', data: regular, weight: 400, style: 'normal' },
        { name: 'Atkinson', data: bold, weight: 700, style: 'normal' },
        { name: 'Atkinson', data: italic, weight: 400, style: 'italic' },
      ],
    }
  );
}
