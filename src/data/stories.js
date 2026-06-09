import { frameUrl } from '../lib/framePlaylist';

export const lightingStory = {
  id: 'lighting',
  title: 'Illumination as Architecture',
  subtitle: 'Luxury Lighting',
  frames: [
    { src: frameUrl('first_half', 1), caption: 'Luxury Living Room' },
    { src: frameUrl('first_half', 90), caption: 'Chandelier Close-Up' },
    { src: frameUrl('first_half', 95), caption: 'Side Angle' },
    { src: frameUrl('first_half', 30), caption: 'Lighting Detail' },
    { src: frameUrl('first_half', 50), caption: 'Evening Ambience' },
    { src: frameUrl('first_half', 98), caption: 'Final Luxury Reveal' },
  ],
};

export const mirrorStory = {
  id: 'mirrors',
  title: 'Reflection Redefined',
  subtitle: 'Designer Mirrors',
  frames: [
    { src: frameUrl('second_half', 40), caption: 'Luxury Bathroom' },
    { src: frameUrl('second_half', 45), caption: 'Mirror Reveal' },
    { src: frameUrl('second_half', 50), caption: 'LED Activation' },
    { src: frameUrl('second_half', 55), caption: 'Reflection Detail' },
    { src: frameUrl('second_half', 60), caption: 'Vanity Area' },
    { src: frameUrl('second_half', 70), caption: 'Hero Mirror Shot' },
  ],
};

export const fanStory = {
  id: 'fans',
  title: 'Silent Comfort',
  subtitle: 'European Fans',
  frames: [
    { src: frameUrl('first_half', 155), caption: 'Luxury Bedroom' },
    { src: frameUrl('first_half', 160), caption: 'Fan Introduction' },
    { src: frameUrl('first_half', 165), caption: 'Fan Rotation' },
    { src: frameUrl('first_half', 170), caption: 'Ceiling Detail' },
    { src: frameUrl('first_half', 175), caption: 'Alternate Angle' },
    { src: frameUrl('first_half', 180), caption: 'Final Reveal' },
  ],
};

export const smarthomeStory = {
  id: 'smarthome',
  title: 'Intelligence in Every Detail',
  subtitle: 'Smart Home Automation',
  frames: [
    { src: frameUrl('first_half', 20), caption: 'Luxury Interior' },
    { src: frameUrl('first_half', 40), caption: 'Smart Lighting' },
    { src: frameUrl('first_half', 170), caption: 'Smart Fans' },
    { src: frameUrl('first_half', 230), caption: 'Automated Curtains' },
    { src: frameUrl('second_half', 192), caption: 'Control Panel' },
    { src: frameUrl('second_half', 185), caption: 'Whole Home Automation' },
  ],
};

export const galleryItems = [
  { src: frameUrl('first_half', 1), category: 'Living Rooms', title: 'Ocean View Living' },
  { src: frameUrl('first_half', 50), category: 'Living Rooms', title: 'Twilight Lounge' },
  { src: frameUrl('first_half', 160), category: 'Bedrooms', title: 'Master Suite' },
  { src: frameUrl('first_half', 170), category: 'Bedrooms', title: 'Palm View Bedroom' },
  { src: frameUrl('second_half', 40), category: 'Bathrooms', title: 'Stone & Walnut Bath' },
  { src: frameUrl('second_half', 55), category: 'Bathrooms', title: 'LED Vanity' },
  { src: frameUrl('first_half', 95), category: 'Villas', title: 'Grand Chandelier Hall' },
  { src: frameUrl('second_half', 192), category: 'Villas', title: 'Smart Villa Control' },
  { src: frameUrl('first_half', 200), category: 'Apartments', title: 'Urban Luxury' },
  { src: frameUrl('second_half', 80), category: 'Apartments', title: 'Compact Elegance' },
];
