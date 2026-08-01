import { MessageCircle } from "lucide-react";
import "./WhatsAppButton.css";

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/919994196906?text=Hello%20New%20Spartans%20Gym,%20I%20would%20like%20to%20know%20more%20about%20your%20training."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with New Spartans Gym on WhatsApp"
    >
      <MessageCircle />
      <span>Chat With Us</span>
    </a>
  );
}

export default WhatsAppButton;