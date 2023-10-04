import React from 'react'

import DicierPixelIcon from './index.js'

export default {
  component: DicierPixelIcon,
  title: 'Components/DicierPixelIcon'
}

export const Primary = (({ children, ...args }) => <DicierPixelIcon {...args}>{children}</DicierPixelIcon>).bind({})

Primary.args = {
  children: '1',
  style: {}
}