import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const ogSize = { width: 1200, height: 630 };

// Atkinson Hyperlegible Next (SIL Open Font License), the page's own face, as TTF for the image renderer
const font = (file: string) => readFile(join(process.cwd(), 'src/app/tutoring/_og', file));

// The link preview matches the page: a headline in ink on white, the price in green.
// Shared by the main tuition page and the area pages, which pass their own headline and footer line.
export async function renderTutorOg({ lines, footer }: { lines: string[]; footer: string }) {
  const [regular, bold] = await Promise.all([font('atkinson-next-regular.ttf'), font('atkinson-next-bold.ttf')]);

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
        <div style={{ display: 'flex', fontSize: 36, fontWeight: 700 }}>Hafeez Tutor</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: 62,
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: '-0.02em',
            }}
          >
            {lines.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
          <div style={{ display: 'flex', marginTop: 30, fontSize: 44, fontWeight: 700, color: '#1F6B48' }}>
            ₹600 an hour · First class free
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 30, color: '#4D5A53' }}>{footer}</div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: 'Atkinson', data: regular, weight: 400, style: 'normal' },
        { name: 'Atkinson', data: bold, weight: 700, style: 'normal' },
      ],
    }
  );
}
