import React from 'react'
import './index.scss'

const DicierIcon = ({ children, ...params }) =>
  <span className='dicier' {...params}>
    {children}
  </span>

export default DicierIcon