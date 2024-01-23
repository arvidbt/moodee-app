export function getAnimationDelay(index: number) {
  const column = index % 7;
  const row = Math.floor(index / 7);
  return row * 0.04 + column * 0.04;
}
