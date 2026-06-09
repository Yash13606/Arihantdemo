const FIRST_HALF_SKIP = { from: 100, to: 154 };
const SECOND_HALF_START = 40;

export function buildFramePlaylist() {
  const playlist = [];
  for (let n = 1; n <= 240; n++) {
    if (n >= FIRST_HALF_SKIP.from && n <= FIRST_HALF_SKIP.to) continue;
    playlist.push({ dir: '/all_frames/first_half/', num: n });
  }
  for (let n = SECOND_HALF_START; n <= 192; n++) {
    playlist.push({ dir: '/all_frames/second_half/', num: n });
  }
  return playlist;
}

export const FRAME_PLAYLIST = buildFramePlaylist();
export const TOTAL_FRAMES = FRAME_PLAYLIST.length;
export const ACT_II_START = FRAME_PLAYLIST.findIndex((f) => f.dir.includes('second_half'));
export const MAX_DPR = 2;

export function getFramePath(globalIndex) {
  const entry = FRAME_PLAYLIST[globalIndex] ?? FRAME_PLAYLIST[0];
  return `${entry.dir}frame_${String(entry.num).padStart(4, '0')}.png`;
}

export function frameUrl(half, num) {
  return `/all_frames/${half}/frame_${String(num).padStart(4, '0')}.png`;
}
