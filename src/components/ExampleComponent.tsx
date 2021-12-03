import React, { useEffect, useState } from 'react'
import { Button } from 'antd'

import useTheme from '../state/theme'

import dev from '../constants/dev'
import Divider from './atoms/Divider'
import ThemeSwitch from './atoms/ThemeSwitch'

const ExampleChildComponent = () => {
  const colors = useTheme((state) => state.colors)

  const [count, setCount] = useState(5)

  const buttonStyle = `mx-2 ${colors.text}`

  useEffect(() => {
    dev && console.log('ExampleChildComponent new count:', count)
  }, [count])

  return (
    <div className={'flex flex-col items-center'}>
      <p className={`${colors.text}`}>{count}</p>
      <div className={'flex'}>
        <Button
          className={buttonStyle}
          type={'primary'}
          onClick={() => setCount(count - 1)}
        >
          -
        </Button>
        <Button
          className={buttonStyle}
          style={{ minWidth: 80 }}
          type={'primary'}
          onClick={() => setCount(count + 1)}
        >
          +
        </Button>
      </div>
    </div>
  )
}

const ExampleComponent = () => {
  const colors = useTheme((state) => state.colors)

  const textStyle = `pt-2 ${colors.text}`
  const columnStyle = 'flex flex-col items-center py-4'

  return (
    <div className={'flex flex-col w-full h-full'}>
      <div className={'flex justify-center items-center h-full'}>
        <div className={`flex border ${colors.border} ${colors.surface}`}>
          <div className={'flex items-center pr-4'}>
            <p className={`p-4 pr-0 ${colors.text}`}>
              Welcome to electron-tsx-tailwind-boilerplate!
            </p>
            <Divider type={'vertical'} />
            <div className={columnStyle}>
              <div>
                <ThemeSwitch />
              </div>
              <p className={textStyle}>
                Example of global app state with Zustand
              </p>
            </div>
            <Divider type={'vertical'} />
            <div className={columnStyle}>
              <div>
                <ExampleChildComponent />
              </div>
              <p className={textStyle}>Example of React component state</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExampleComponent
