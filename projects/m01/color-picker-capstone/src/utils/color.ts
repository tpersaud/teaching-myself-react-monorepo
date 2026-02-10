export type Rgba = {
  r: number;
  g: number;
  b: number;
  a: number;
};

const HEX_RE = /^[0-9a-f]+$/i;

function isHexString(value: string): boolean {
  return HEX_RE.test(value);
}

function expandShorthandRgb(hex3: string): string {
  // "abc" -> "aabbcc"
  return hex3
    .split("")
    .map((ch) => ch + ch)
    .join("");
}

/**
 * Normalizes hex color input to a canonical form.
 *
 * Accepts:
 * - rgb / #rgb
 * - rrggbb / #rrggbb
 * - rrggbbaa / #rrggbbaa
 *
 * Rejects:
 * - invalid lengths (including 4-digit #rgba)
 * - non-hex characters
 */
export function normalizeHex(input: string): string | null {
  const trimmed = input.trim();
  if (trimmed.length === 0) return null;

  const withoutHash = trimmed.startsWith("#") ? trimmed.slice(1) : trimmed;
  const len = withoutHash.length;

  if (len !== 3 && len !== 6 && len !== 8) return null;
  if (!isHexString(withoutHash)) return null;

  if (len === 3) {
    return `#${expandShorthandRgb(withoutHash).toLowerCase()}`;
  }

  return `#${withoutHash.toLowerCase()}`;
}

export function hexToRgba(hex: string): Rgba | null {
  const normalized = normalizeHex(hex);
  if (normalized === null) return null;

  const raw = normalized.slice(1); // rrggbb or rrggbbaa
  const r = Number.parseInt(raw.slice(0, 2), 16);
  const g = Number.parseInt(raw.slice(2, 4), 16);
  const b = Number.parseInt(raw.slice(4, 6), 16);

  if (raw.length === 6) {
    return { r, g, b, a: 1 };
  }

  const alphaByte = Number.parseInt(raw.slice(6, 8), 16);
  const a = alphaByte / 255;

  return { r, g, b, a };
}
