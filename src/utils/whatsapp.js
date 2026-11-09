
const WHATSAPP_NUMBER = "917024823197";

export const openWhatsApp = (service = "") => {
  let message = "नमस्ते पंडित त्रिलोक जोशी जी 🙏\n\n";

  if (service) {
    message += `मैं ${service} बुक करना चाहता/चाहती हूँ।\n\n`;
  }

  message +=
    "कृपया उपलब्ध तारीख, समय और शुल्क की जानकारी दें।\n\n" +
    "नाम:\n" +
    "स्थान:\n" +
    "पूजा की तारीख:";

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=` +
    encodeURIComponent(message);

  window.open(url, "_blank", "noopener,noreferrer");
};

export const callPandit = () => {
  window.location.href = `tel:+${WHATSAPP_NUMBER}`;
};
