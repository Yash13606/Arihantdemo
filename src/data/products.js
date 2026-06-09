export const CATEGORIES = {
  lighting: { id: 'lighting', label: 'Luxury Lighting', slug: 'lighting' },
  mirrors: { id: 'mirrors', label: 'Designer Mirrors', slug: 'mirrors' },
  fans: { id: 'fans', label: 'European Fans', slug: 'fans' },
  smarthome: { id: 'smarthome', label: 'Smart Home Automation', slug: 'smarthome' },
};

export const products = [
  { id: 'LT001', name: 'Crystal Chandelier', category: 'lighting', image: '/all_frames/first_half/frame_0095.png' },
  { id: 'LT002', name: 'Modern Ring Chandelier', category: 'lighting', image: '/all_frames/first_half/frame_0090.png' },
  { id: 'LT003', name: 'Luxury Pendant Light', category: 'lighting', image: '/all_frames/first_half/frame_0085.png' },
  { id: 'LT004', name: 'Designer Wall Light', category: 'lighting', image: '/all_frames/first_half/frame_0200.png' },
  { id: 'LT005', name: 'Premium Ceiling Light', category: 'lighting', image: '/all_frames/first_half/frame_0010.png' },
  { id: 'LT006', name: 'LED Cove Light', category: 'lighting', image: '/all_frames/first_half/frame_0030.png' },
  { id: 'LT007', name: 'Dining Pendant Cluster', category: 'lighting', image: '/all_frames/first_half/frame_0050.png' },
  { id: 'LT008', name: 'Crystal Hanging Lamp', category: 'lighting', image: '/all_frames/first_half/frame_0098.png' },
  { id: 'LT009', name: 'Luxury Floor Lamp', category: 'lighting', image: '/all_frames/first_half/frame_0220.png' },
  { id: 'LT010', name: 'Decorative Table Lamp', category: 'lighting', image: '/all_frames/first_half/frame_0180.png' },

  { id: 'MR001', name: 'LED Bathroom Mirror', category: 'mirrors', image: '/all_frames/second_half/frame_0040.png' },
  { id: 'MR002', name: 'Smart Touch Mirror', category: 'mirrors', image: '/all_frames/second_half/frame_0050.png' },
  { id: 'MR003', name: 'Anti-Fog Mirror', category: 'mirrors', image: '/all_frames/second_half/frame_0060.png' },
  { id: 'MR004', name: 'Round LED Mirror', category: 'mirrors', image: '/all_frames/second_half/frame_0070.png' },
  { id: 'MR005', name: 'Luxury Vanity Mirror', category: 'mirrors', image: '/all_frames/second_half/frame_0080.png' },
  { id: 'MR006', name: 'Backlit Designer Mirror', category: 'mirrors', image: '/all_frames/second_half/frame_0090.png' },
  { id: 'MR007', name: 'Full Length Smart Mirror', category: 'mirrors', image: '/all_frames/second_half/frame_0100.png' },
  { id: 'MR008', name: 'Premium Wall Mirror', category: 'mirrors', image: '/all_frames/second_half/frame_0110.png' },

  { id: 'FN001', name: 'Premium Wooden Fan', category: 'fans', image: '/all_frames/first_half/frame_0160.png' },
  { id: 'FN002', name: 'Silent Designer Fan', category: 'fans', image: '/all_frames/first_half/frame_0165.png' },
  { id: 'FN003', name: 'Smart Ceiling Fan', category: 'fans', image: '/all_frames/first_half/frame_0170.png' },
  { id: 'FN004', name: 'Minimal Luxury Fan', category: 'fans', image: '/all_frames/first_half/frame_0175.png' },
  { id: 'FN005', name: 'High Airflow Fan', category: 'fans', image: '/all_frames/first_half/frame_0185.png' },
  { id: 'FN006', name: 'Premium Matte Black Fan', category: 'fans', image: '/all_frames/first_half/frame_0190.png' },

  { id: 'SH001', name: 'Smart Lighting Control', category: 'smarthome', image: '/all_frames/second_half/frame_0180.png' },
  { id: 'SH002', name: 'Smart Curtain Controller', category: 'smarthome', image: '/all_frames/first_half/frame_0230.png' },
  { id: 'SH003', name: 'Smart Fan Automation', category: 'smarthome', image: '/all_frames/first_half/frame_0170.png' },
  { id: 'SH004', name: 'Touch Control Panel', category: 'smarthome', image: '/all_frames/second_half/frame_0192.png' },
  { id: 'SH005', name: 'Whole Home Automation Hub', category: 'smarthome', image: '/all_frames/second_half/frame_0185.png' },
  { id: 'SH006', name: 'Voice Controlled Smart System', category: 'smarthome', image: '/all_frames/second_half/frame_0175.png' },
];

export function getProductsByCategory(category) {
  return products.filter((p) => p.category === category);
}
