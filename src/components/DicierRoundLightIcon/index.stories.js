import React from 'react'

import DicierRoundLightIcon from './index.js'

export default {
  component: DicierRoundLightIcon,
  title: 'Components/DicierRoundLightIcon'
}

export const Primary = (({ children, ...args }) => <DicierRoundLightIcon {...args}>{children}</DicierRoundLightIcon>).bind({})

Primary.args = {
  children: '1',
  style: {}
}