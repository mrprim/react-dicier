import React from 'react'
import loadFont from '../../fonts/loader'
import * as modes from '../../constants/modes'
import * as weights from '../../constants/weights'
import './index.scss'

const DicierIcon = ({ children, className, mode = modes.BLOCK, weight = weights.DARK, ...params }) => {
  mode = mode?.toLowerCase()
  weight = weight?.toLowerCase()
  loadFont(mode, weight)

  return (
    <span {...params} className={buildClassName({ mode, weight, className })} >
      {children}
    </span>

  )
}

const buildClassName = ({ mode, weight, className }) => {
  const classes = ['dicier']
  if (mode === modes.PIXEL) {
    classes.push(['dicier-pixel'])
  } else {
    classes.push(['dicier', mode, weight].join('-'))
  }
  if (className) {
    classes.push(className)
  }
  return classes.join(' ')
}

export default DicierIcon