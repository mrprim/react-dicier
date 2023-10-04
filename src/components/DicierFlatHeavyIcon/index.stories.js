import React from 'react'

import DicierFlatHeavyIcon from './index.js'

export default {
  component: DicierFlatHeavyIcon,
  title: 'Components/DicierFlatHeavyIcon'
}

export const Primary = (({ children, ...args }) => <DicierFlatHeavyIcon {...args}>{children}</DicierFlatHeavyIcon>).bind({})

Primary.args = {
  children: '1',
  style: {}
}