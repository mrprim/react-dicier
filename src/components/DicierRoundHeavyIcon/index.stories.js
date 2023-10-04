import React from 'react'

import DicierRoundHeavyIcon from './index.js'

export default {
  component: DicierRoundHeavyIcon,
  title: 'Components/DicierRoundHeavyIcon'
}

export const Primary = (({ children, ...args }) => <DicierRoundHeavyIcon {...args}>{children}</DicierRoundHeavyIcon>).bind({})

Primary.args = {
  children: '1',
  style: {}
}