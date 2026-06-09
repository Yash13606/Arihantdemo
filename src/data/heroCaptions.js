import { ACT_II_START, TOTAL_FRAMES } from '../lib/framePlaylist';

/** Scroll captions keyed to playlist frame index (0 … TOTAL_FRAMES − 1) */
export const HERO_CAPTIONS = [
  {
    id: 'living',
    start: 0,
    end: 38,
    side: 'left',
    label: 'Luxury Lighting',
    text: 'Layered ceiling lights and cove glow shape a living room built for evening gatherings.',
  },
  {
    id: 'chandelier',
    start: 35,
    end: 72,
    side: 'right',
    label: 'Crystal Chandelier',
    text: 'A statement crystal piece anchors the room with warm refraction across marble and glass.',
  },
  {
    id: 'vista',
    start: 68,
    end: 98,
    side: 'left',
    label: 'Evening Ambience',
    text: 'Twilight enters through full height glazing while interior light stays soft and balanced.',
  },
  {
    id: 'bedroom',
    start: 95,
    end: 140,
    side: 'right',
    label: 'European Fans',
    text: 'Quiet ceiling fans with timber blades bring comfort without disturbing the room’s calm lines.',
  },
  {
    id: 'suite',
    start: 135,
    end: ACT_II_START - 5,
    side: 'left',
    label: 'Bedroom Suite',
    text: 'Warm pendants and concealed strips create a restful suite with refined material contrast.',
  },
  {
    id: 'bath',
    start: ACT_II_START,
    end: ACT_II_START + 55,
    side: 'right',
    label: 'Designer Mirrors',
    text: 'Backlit vanity mirrors and shelf lighting turn the bath into a composed ritual space.',
  },
  {
    id: 'stone',
    start: ACT_II_START + 50,
    end: TOTAL_FRAMES - 55,
    side: 'left',
    label: 'Vanity Lighting',
    text: 'Stone, walnut and mirror meet under even LED wash for clarity without harsh glare.',
  },
  {
    id: 'smart',
    start: TOTAL_FRAMES - 54,
    end: TOTAL_FRAMES - 1,
    side: 'right',
    label: 'Smart Automation',
    text: 'One touch panel orchestrates lighting, climate and scenes across the entire home.',
  },
];

export function getActiveCaption(frameIndex) {
  const idx = Math.max(0, Math.min(TOTAL_FRAMES - 1, frameIndex));
  return HERO_CAPTIONS.find((c) => idx >= c.start && idx <= c.end) ?? null;
}
