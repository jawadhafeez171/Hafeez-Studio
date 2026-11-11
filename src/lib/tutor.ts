// Hafeez Tutor contact details, shared by the tutoring page and the shared contact dialog
export const TUTOR_PHONE_DISPLAY = '+91 99028 00693';
export const TUTOR_WHATSAPP_TEXT =
  "Hi, I'd like to book a free trial class for Maths/Physics. My child is in Class __, board: __, area: __.";
export const TUTOR_WHATSAPP_URL = 'https://wa.me/919902800693?text=' + encodeURIComponent(TUTOR_WHATSAPP_TEXT);

// The same message with the area already filled in, for the area pages
export const tutorWhatsAppUrlFor = (area: string) =>
  'https://wa.me/919902800693?text=' +
  encodeURIComponent(
    `Hi, I'd like to book a free trial class for Maths/Physics in ${area}. My child is in Class __, board: __.`
  );
