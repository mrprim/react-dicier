import React from 'react'
import DicierIcon from '../DicierIcon'
import * as modes from '../../constants/modes'
import * as weights from '../../constants/weights'
import './index.scss'

const DicierFlatLightIcon = ({ children, ...params }) =>
  <DicierIcon {...params} mode={modes.FLAT} weight={weights.LIGHT} >
    {children}
  </DicierIcon>

export default DicierFlatLightIcon