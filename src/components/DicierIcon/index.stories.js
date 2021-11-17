import React from 'react'

import DicierIcon from './index.js'

export default {
  component: DicierIcon,
  title: 'Components/DicierIcon'
}

export const Primary = (({ children, ...args }) => <DicierIcon {...args}>{children}</DicierIcon>).bind({})

Primary.args = {
  children: '1',
  style: {}
}