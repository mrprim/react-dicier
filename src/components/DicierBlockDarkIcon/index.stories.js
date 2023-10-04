import React from 'react'

import DicierBlockDarkIcon from './index.js'

export default {
  component: DicierBlockDarkIcon,
  title: 'Components/DicierBlockDarkIcon'
}

export const Primary = (({ children, ...args }) => <DicierBlockDarkIcon {...args}>{children}</DicierBlockDarkIcon>).bind({})

Primary.args = {
  children: '1',
  style: {}
}