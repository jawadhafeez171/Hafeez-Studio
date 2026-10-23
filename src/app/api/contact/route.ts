import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message, type, plan } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name and Phone number are required.' },
        { status: 400 }
      );
    }

    const scriptUrl =
      type === 'tutor'
        ? process.env.GOOGLE_SCRIPT_URL_TUTOR ||
          'https://script.google.com/macros/s/AKfycbx4c0cQGOjm3OPMTrgsjJB0AeQh0sdgC4r8-n3mvy10P7dai07kex51KjKANRAooCNr/exec'
        : process.env.GOOGLE_SCRIPT_URL ||
          'https://script.google.com/macros/s/AKfycbwc_lx2-RVD-RHBmewMYQFyZbI_6l99B_ibxbUv3qP_1ITISFYVMjVXjGbMzxMVrBra/exec';

    if (scriptUrl && scriptUrl !== 'YOUR_GOOGLE_SCRIPT_URL_HERE') {
      try {
        const formData = new URLSearchParams();
        formData.append('name', name);
        formData.append('phone', phone);
        if (email) formData.append('email', email);
        if (message) formData.append('message', message);
        if (plan) formData.append('plan', plan);
        formData.append('timestamp', new Date().toISOString());
        formData.append('type', type || 'studio');

        await fetch(scriptUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString(),
        });
      } catch (err) {
        console.error('Failed to proxy lead to Google Script:', err);
        // We still respond success if local validation passed to avoid blocking the user
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your inquiry has been received. We will contact you within 24 hours.',
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process inquiry. Please try again or reach out directly.' },
      { status: 500 }
    );
  }
}
