import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt =
  'Hafeez Tutor: Maths and Physics, worked out step by step. One-to-one home tuition for Classes 8 to 10 in Bangalore, ₹600 an hour.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Atkinson Hyperlegible Next (SIL Open Font License), the page's own face, as TTF for the image renderer
const font = (file: string) => readFile(join(process.cwd(), 'src/app/tutoring/_og', file));

// The link preview is a small piece of the board: the headline in chalk and one worked line in yellow
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
          background: '#1E3A2F',
          color: '#EEEFE6',
          fontFamily: 'Atkinson',
        }}
      >
        <div style={{ display: 'flex', fontSize: 36, fontWeight: 700 }}>
          Hafeez&nbsp;<span style={{ fontStyle: 'italic', fontWeight: 400, color: '#B7C6BB' }}>Tutor</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 88, fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.02em' }}>
            <span>Maths and Physics,</span>
            <span>worked out step by step.</span>
          </div>
          <div style={{ display: 'flex', marginTop: 30, fontSize: 44, color: '#EBD56C' }}>
            s = ut + ½at²
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 30, color: '#B7C6BB' }}>
          At home in Bangalore · Classes 8 to 10 · CBSE, ICSE, IGCSE · ₹600 an hour
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
