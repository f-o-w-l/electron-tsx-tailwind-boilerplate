import React from 'react'
import { Switch } from 'antd'

import useTheme from '../../state/theme'

import DefaultTheme from '../../constants/DefaultTheme'
import DarkTheme from '../../constants/DarkTheme'

import { Theme } from '../../state/theme.d'

const ThemeSwitch = () => {
  const themeName = useTheme((state) => state.themeName)
  const setColors = useTheme((state) => state.setColors)
  const setThemeName = useTheme((state) => state.setThemeName)

  const onChange = () => {
    setColors(themeName === Theme.Dark ? DefaultTheme : DarkTheme)
    setThemeName(themeName === Theme.Dark ? Theme.Default : Theme.Dark)
  }

  return <Switch onChange={onChange} />
}

export default ThemeSwitch
