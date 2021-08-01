import React from 'react'
import { Divider as AntDivider } from 'antd'

import useTheme from '../../state/theme'

const Divider = (props: {
  type?: 'horizontal' | 'vertical'
  noMargin?: boolean
}) => {
  const { type = 'horizontal', noMargin } = props

  const colors = useTheme((state) => state.colors)

  let style = `${colors.divider} `

  if (type === 'vertical')
    style = style.concat(`w-px h-full my-0 ${noMargin ? 'mx-0' : 'mx-3'}`)
  else style = style.concat(`w-full h-px mx-0 ${noMargin ? 'my-0' : 'my-3'}`)

  return <AntDivider type={type} className={style} />
}

export default Divider
