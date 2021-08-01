import create from 'zustand'
import { devtools } from 'zustand/middleware'

import dev from '../constants/dev'
import DefaultTheme from '../constants/DefaultTheme'

import { ThemeState, Theme } from './theme.d'

const themeDefault = {
  // colors: { ...DefaultTheme },
  colors: { ...DefaultTheme },
  themeName: Theme.Default,
}

const useTheme = create<ThemeState>(
  devtools(
    (set) => ({
      colors: themeDefault.colors,
      setColors: (colors) =>
        set(() => {
          dev && console.log('setColors:', colors)

          return { colors }
        }),
      themeName: themeDefault.themeName,
      setThemeName: (themeName) =>
        set(() => {
          dev && console.log('setThemeName:', themeName)

          return { themeName }
        }),
    }),
    'theme'
  )
)

export default useTheme
