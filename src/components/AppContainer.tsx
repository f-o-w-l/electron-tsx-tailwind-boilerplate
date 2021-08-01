import React from 'react'

import useTheme from '../state/theme'

import ExampleComponent from './ExampleComponent'

const AppContainer = () => {
  const { background } = useTheme((state) => state.colors)

  return (
    <div className={`absolute w-full h-full ${background}`}>
      <ExampleComponent />
    </div>
  )
}

export default AppContainer
