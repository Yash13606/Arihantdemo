import { TOTAL_FRAMES } from '../lib/framePlaylist';

const QUARTER = Math.floor(TOTAL_FRAMES / 4);

function quarterRange(index) {
  const start = index * QUARTER;
  const end = index === 3 ? TOTAL_FRAMES - 1 : (index + 1) * QUARTER - 1;
  return { start, end };
}

/** Four scroll chapters — each owns ~25% of the hero journey */
export const HERO_CAPTIONS = [
  {
    id: 'lighting',
    ...quarterRange(0),
    side: 'left',
    label: 'Luxury Lighting',
    text: 'Layered ceiling lights and cove glow shape living spaces built for warm evening gatherings.',
  },
  {
    id: 'fans',
    ...quarterRange(1),
    side: 'right',
    label: 'European Fans',
    text: 'Quiet ceiling fans with refined blades bring comfort without disturbing the room’s calm lines.',
  },
  {
    id: 'mirrors',
    ...quarterRange(2),
    side: 'left',
    label: 'Designer Mirrors',
    text: 'Backlit vanity mirrors and shelf lighting turn the bath into a composed ritual space.',
  },
  {
    id: 'smart',
    ...quarterRange(3),
    side: 'right',
    label: 'Smart Automation',
    text: 'One touch panel orchestrates lighting, climate and scenes across the entire home.',
  },
];

export function getActiveCaption(frameIndex) {
  const idx = Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIndex));
  return HERO_CAPTIONS.find((c) => idx >= c.start && idx <= c.end) ?? HERO_CAPTIONS[0];
}
