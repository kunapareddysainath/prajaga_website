import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919876543210";

const WhatsAppButton = () => (
  <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Prajaga Interiors, I would like to enquire about interior design.")}`}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gold-bg flex items-center justify-center shadow-lg animate-pulse hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={26} className="text-charcoal" />
  </a>
);

export default WhatsAppButton;
