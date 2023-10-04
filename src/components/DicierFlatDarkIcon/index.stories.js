import React from 'react'

import DicierFlatDarkIcon from './index.js'

export default {
  component: DicierFlatDarkIcon,
  title: 'Components/DicierFlatDarkIcon'
}

export const Primary = (({ children, ...args }) => <DicierFlatDarkIcon {...args}>{children}</DicierFlatDarkIcon>).bind({})

Primary.args = {
  children: '1',
  style: {}
}