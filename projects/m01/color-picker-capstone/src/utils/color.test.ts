import { describe, expect, it } from "vitest";

import { hexToHex6, hexToRgba, normalizeHex } from "./color";

describe("normalizeHex", () => {
  it("normalizes 3-digit shorthand with hash", () => {
    expect(normalizeHex("#abc")).toBe("#aabbcc");
  });

  it("normalizes 3-digit shorthand without hash", () => {
    expect(normalizeHex("abc")).toBe("#aabbcc");
  });

  it("keeps 6-digit hex", () => {
    expect(normalizeHex("#aabbcc")).toBe("#aabbcc");
  });

  it("accepts uppercase input and outputs lowercase", () => {
    expect(normalizeHex("AABBCC")).toBe("#aabbcc");
  });

  it("keeps 8-digit hex", () => {
    expect(normalizeHex("#aabbccdd")).toBe("#aabbccdd");
  });

  it("trims whitespace", () => {
    expect(normalizeHex(" aabbccdd ")).toBe("#aabbccdd");
  });

  it("rejects invalid lengths", () => {
    expect(normalizeHex("")).toBeNull();
    expect(normalizeHex("#")).toBeNull();
    expect(normalizeHex("#ab")).toBeNull();
    expect(normalizeHex("#abcd")).toBeNull();
    expect(normalizeHex("#aaaaa")).toBeNull();
    expect(normalizeHex("#aaaaaaa")).toBeNull();
  });

  it("rejects non-hex characters", () => {
    expect(normalizeHex("#gggggg")).toBeNull();
    expect(normalizeHex("zzzzzz")).toBeNull();
    expect(normalizeHex("#12 3456")).toBeNull();
  });
});

describe("hexToRgba", () => {
  it("parses 6-digit black", () => {
    expect(hexToRgba("#000000")).toEqual({ r: 0, g: 0, b: 0, a: 1 });
  });

  it("parses 6-digit white without hash", () => {
    expect(hexToRgba("ffffff")).toEqual({ r: 255, g: 255, b: 255, a: 1 });
  });

  it("parses alpha channel", () => {
    const result = hexToRgba("#00000080");
    expect(result).not.toBeNull();
    if (result === null) return;

    expect(result.r).toBe(0);
    expect(result.g).toBe(0);
    expect(result.b).toBe(0);
    expect(result.a).toBeCloseTo(128 / 255, 10);
  });

  it("returns null for invalid hex", () => {
    expect(hexToRgba("#gggggg")).toBeNull();
    expect(hexToRgba("#abcd")).toBeNull();
  });
});

describe("hexToHex6", () => {
  it("returns 6-digit hex unchanged", () => {
    expect(hexToHex6("#aabbcc")).toBe("#aabbcc");
  });

  it("expands shorthand 3-digit to 6-digit", () => {
    expect(hexToHex6("#abc")).toBe("#aabbcc");
    expect(hexToHex6("abc")).toBe("#aabbcc");
  });

  it("strips alpha channel from 8-digit hex", () => {
    expect(hexToHex6("#aabbccdd")).toBe("#aabbcc");
    expect(hexToHex6("aabbccdd")).toBe("#aabbcc");
  });

  it("accepts uppercase and trims whitespace", () => {
    expect(hexToHex6(" AABBCCDD ")).toBe("#aabbcc");
  });

  it("returns null for invalid input", () => {
    expect(hexToHex6("")).toBeNull();
    expect(hexToHex6("#")).toBeNull();
    expect(hexToHex6("#abcd")).toBeNull();
    expect(hexToHex6("#gggggg")).toBeNull();
    expect(hexToHex6("#12 3456")).toBeNull();
  });
});
