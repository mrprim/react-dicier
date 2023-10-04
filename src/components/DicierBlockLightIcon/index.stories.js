import React from 'react'

import DicierBlockLightIcon from './index.js'

export default {
  component: DicierBlockLightIcon,
  title: 'Components/DicierBlockLightIcon'
}

export const Primary = (({ children, ...args }) => <DicierBlockLightIcon {...args}>{children}</DicierBlockLightIcon>).bind({})

Primary.args = {
  children: '1',
  style: {}
}