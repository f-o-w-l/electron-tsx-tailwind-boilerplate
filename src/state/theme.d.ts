export enum Theme {
  Default,
  Dark,
}

export type ThemeColors = {
  // Surface colors
  background: string
  surface: string
  border: string
  // Text colors
  text: string
  // Atom colors
  divider: string
}

export interface ThemeState {
  colors: ThemeColors
  setColors: (colors: ThemeColors) => void
  themeName: Theme
  setThemeName: (themeName: Theme) => void
}
