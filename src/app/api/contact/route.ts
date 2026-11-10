import { NextResponse } from 'next/server';

const STUDIO_SCRIPT_FALLBACK =
  'https://script.google.com/macros/s/AKfycbwc_lx2-RVD-RHBmewMYQFyZbI_6l99B_ibxbUv3qP_1ITISFYVMjVXjGbMzxMVrBra/exec';
const TUTOR_SCRIPT_FALLBACK =
  'https://script.google.com/macros/s/AKfycbx4c0cQGOjm3OPMTrgsjJB0AeQh0sdgC4r8-n3mvy10P7dai07kex51KjKANRAooCNr/exec';

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: 'That request could not be read.' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const { email, message, type, plan } = body as Record<string, string | undefined>;

  if (!name || !phone) {
    return NextResponse.json({ success: false, error: 'Please add your name and phone number.' }, { status: 400 });
  }
  if (!/^\d{10,13}$/.test(phone.replace(/[\s\-()+]/g, ''))) {
    return NextResponse.json(
      { success: false, error: 'That phone number looks incomplete — please use a 10-digit mobile number.' },
      { status: 400 }
    );
  }

  const scriptUrl =
    type === 'tutor'
      ? process.env.GOOGLE_SCRIPT_URL_TUTOR || TUTOR_SCRIPT_FALLBACK
      : process.env.GOOGLE_SCRIPT_URL || STUDIO_SCRIPT_FALLBACK;

  const formData = new URLSearchParams();
  formData.append('name', name);
  formData.append('phone', phone);
  if (email) formData.append('email', email);
  if (message) formData.append('message', message);
  if (plan) formData.append('plan', plan);
  formData.append('timestamp', new Date().toISOString());
  formData.append('type', type || 'studio');

  // Only report success once the sheet has actually accepted the lead
  try {
    const upstream = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
      signal: AbortSignal.timeout(10000),
    });
    if (!upstream.ok) {
      console.error('Lead sheet rejected inquiry:', upstream.status);
      return NextResponse.json({ success: false, error: "We couldn't save your details just now." }, { status: 502 });
    }
  } catch (err) {
    console.error('Failed to reach lead sheet:', err);
    return NextResponse.json({ success: false, error: "We couldn't save your details just now." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
