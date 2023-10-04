import React from 'react'
import DicierIcon from '../DicierIcon'
import * as modes from '../../constants/modes'
import * as weights from '../../constants/weights'
import './index.scss'

const DicierPixelIcon = ({ children, ...params }) =>
  <DicierIcon {...params} mode={modes.PIXEL} >
    {children}
  </DicierIcon>

export default DicierPixelIcon