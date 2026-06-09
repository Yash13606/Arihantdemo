const WHATSAPP_PHONE = '916383945610';

const WHATSAPP_GROUPS = {
  lighting: 'LIGHTING',
  mirrors: 'MIRRORS',
  fans: 'FANS',
  smarthome: 'SMART HOME',
};

export function buildInquiryMessage(cartItems) {
  const grouped = {};
  for (const item of cartItems) {
    const label = WHATSAPP_GROUPS[item.category] ?? item.category.toUpperCase();
    if (!grouped[label]) grouped[label] = [];
    const qty = item.quantity > 1 ? ` (x${item.quantity})` : '';
    grouped[label].push(`• ${item.id} - ${item.name}${qty}`);
  }

  let body = 'Hello Arihant Lights,\n\nI am interested in the following products:\n\n';
  for (const [category, lines] of Object.entries(grouped)) {
    body += `${category}\n\n${lines.join('\n')}\n\n`;
  }
  body += 'Please share more details.\n\nThank you.';
  return body;
}

export function openWhatsAppInquiry(cartItems) {
  if (!cartItems.length) return;
  const text = encodeURIComponent(buildInquiryMessage(cartItems));
  window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, '_blank', 'noopener,noreferrer');
}

export { WHATSAPP_PHONE };
