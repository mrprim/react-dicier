import React from 'react'

import DicierRoundDarkIcon from './index.js'

export default {
  component: DicierRoundDarkIcon,
  title: 'Components/DicierRoundDarkIcon'
}

export const Primary = (({ children, ...args }) => <DicierRoundDarkIcon {...args}>{children}</DicierRoundDarkIcon>).bind({})

Primary.args = {
  children: '1',
  style: {}
}