import React from 'react'

import DicierBlockHeavyIcon from './index.js'

export default {
  component: DicierBlockHeavyIcon,
  title: 'Components/DicierBlockHeavyIcon'
}

export const Primary = (({ children, ...args }) => <DicierBlockHeavyIcon {...args}>{children}</DicierBlockHeavyIcon>).bind({})

Primary.args = {
  children: '1',
  style: {}
}