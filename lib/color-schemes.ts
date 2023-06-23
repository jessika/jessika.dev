/**
 * @fileoverview Functions that handle changing color scheme (light mode, dark mode)
 */

const darkColorSchemeQuery = "(prefers-color-scheme:dark)";

/** Possible color schemes used by both CSS and Remark42. */
export enum ColorScheme {
  Dark = "dark",
  Light = "light",
}

export function getColorScheme(): ColorScheme | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }
  return window.matchMedia(darkColorSchemeQuery).matches
    ? ColorScheme.Dark
    : ColorScheme.Light;
}

/** Calls the listener on registration and on every color scheme change. */
export function registerColorSchemeListener(
  listener: (theme: ColorScheme) => void
) {
  if (typeof window === "undefined") {
    return;
  }
  listener(
    window.matchMedia(darkColorSchemeQuery).matches
      ? ColorScheme.Dark
      : ColorScheme.Light
  );
  const handleColorSchemeChange = (event: MediaQueryListEvent) => {
    listener(event.matches ? ColorScheme.Dark : ColorScheme.Light);
  };
  window
    .matchMedia(darkColorSchemeQuery)
    .addEventListener("change", handleColorSchemeChange);
  return () => {
    window
      .matchMedia(darkColorSchemeQuery)
      .removeEventListener("change", handleColorSchemeChange);
  };
}
