import React from 'react'

import DicierFlatLightIcon from './index.js'

export default {
  component: DicierFlatLightIcon,
  title: 'Components/DicierFlatLightIcon'
}

export const Primary = (({ children, ...args }) => <DicierFlatLightIcon {...args}>{children}</DicierFlatLightIcon>).bind({})

Primary.args = {
  children: '1',
  style: {}
}