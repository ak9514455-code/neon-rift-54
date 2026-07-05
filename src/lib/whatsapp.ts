export const PHONE_DISPLAY = "+91 79063 12118";
export const PHONE_TEL = "+917906312118";
export const WHATSAPP_NUMBER = "917906312118";

const bookingMessage = `Hi Anytime Gaming! 🎮 I want to book a slot.

📋 *BOOKING DETAILS*

👤 Name: 
📅 Date: 
⏰ Preferred Time: 
🎮 Platform: (PS5 / PS4 / PC / VR / Racing Wheel)
👥 Number of Players: 
⏱️ Duration: (30 mins / 1 hour)

Please confirm my booking. Thank you!`;

export const WHATSAPP_BOOKING_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(bookingMessage)}`;

export function whatsappUrl(customMessage?: string) {
  if (!customMessage) return WHATSAPP_BOOKING_URL;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(customMessage)}`;
}
