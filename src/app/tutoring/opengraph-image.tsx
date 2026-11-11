import { ogSize, renderTutorOg } from './og';

export const alt =
  'Hafeez Tutor: Maths and Physics home tuition for Classes 8 to 10 in Bangalore. ₹600 an hour, first class free.';
export const size = ogSize;
export const contentType = 'image/png';

// The main tuition page's link preview
export default function OpenGraphImage() {
  return renderTutorOg({
    lines: ['Maths and Physics home tuition', 'for Classes 8 to 10.'],
    footer: 'One-to-one at your home in Bangalore · CBSE, ICSE, IGCSE',
  });
}
