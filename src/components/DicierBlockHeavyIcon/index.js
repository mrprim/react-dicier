import React from 'react'
import DicierIcon from '../DicierIcon'
import * as modes from '../../constants/modes'
import * as weights from '../../constants/weights'
import './index.scss'

const DicierBlockHeavyIcon = ({ children, ...params }) =>
  <DicierIcon {...params} mode={modes.BLOCK} weight={weights.HEAVY} >
    {children}
  </DicierIcon>

export default DicierBlockHeavyIcon