import {
  MessageCircle,
  Phone,
} from "lucide-react";

import {
  openWhatsApp,
  callPandit,
} from "../utils/whatsapp";

function FloatingActions() {

  return (
    <div className="fixed bottom-2 right-2 z-40 flex flex-col gap-2">

      <button
        onClick={() => openWhatsApp()}
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition"
        aria-label="WhatsApp"
      >
        <MessageCircle />
      </button>


      <button
        onClick={callPandit}
        className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-xl hover:scale-110 transition"
        aria-label="Call"
      >
        <Phone />
      </button>

    </div>
  );
}

export default FloatingActions;