import React from 'react'
import * as weights from '../../constants/weights'
import * as modes from '../../constants/modes'

import DicierIcon from './index.js'

export default {
  component: DicierIcon,
  title: 'Components/DicierIcon',
  argTypes: {
    mode: {
      options: Object.values(modes),
      control: { type: 'radio' }
    },
    weight: {
      options: Object.values(weights),
      control: { type: 'radio' }
    }
  }
}

export const Primary = (({ children, ...args }) => <DicierIcon {...args}>{children}</DicierIcon>).bind({})

Primary.args = {
  children: '1',
  style: {}
}