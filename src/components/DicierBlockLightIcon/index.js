import React from 'react'
import DicierIcon from '../DicierIcon'
import * as modes from '../../constants/modes'
import * as weights from '../../constants/weights'
import './index.scss'

const DicierBlockLightIcon = ({ children, ...params }) =>
  <DicierIcon {...params} mode={modes.BLOCK} weight={weights.LIGHT} >
    {children}
  </DicierIcon>

export default DicierBlockLightIcon