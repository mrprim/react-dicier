import React from 'react'
import DicierIcon from '../DicierIcon'
import * as modes from '../../constants/modes'
import * as weights from '../../constants/weights'
import './index.scss'

const DicierRoundDarkIcon = ({ children, ...params }) =>
  <DicierIcon {...params} mode={modes.ROUND} weight={weights.DARK} >
    {children}
  </DicierIcon>

export default DicierRoundDarkIcon