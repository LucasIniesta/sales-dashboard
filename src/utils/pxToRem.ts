/**
 * Convert Pixels to rem
 * @param pixels - Pixel value to be converted
 * @returns The converted rem value
 */

export function pxToRem(pixels: number): string {
  const baseFontSize = 16 // Default browser font size in pixels
  return `${pixels / baseFontSize}rem`
}
