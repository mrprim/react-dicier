import * as modes from '../constants/modes'
import * as weights from '../constants/weights'

const loadFont = (mode = '', weight = '') => {
  mode = mode.toLowerCase()
  weight = weight.toLowerCase()

  if (mode === modes.PIXEL) {
    import('./Dicier-Pixel.scss')
  } else if (mode === modes.BLOCK) {
    if (weight === weights.DARK) {
      import('./Dicier-Block-Dark.scss')
    } else if (weight === weights.HEAVY) {
      import('./Dicier-Block-Heavy.scss')
    } else if (weight === weights.LIGHT) {
      import('./Dicier-Block-Light.scss')
    }
  } else if (mode === modes.ROUND) {
    if (weight === weights.DARK) {
      import('./Dicier-Round-Dark.scss')
    } else if (weight === weights.HEAVY) {
      import('./Dicier-Round-Heavy.scss')
    } else if (weight === weights.LIGHT) {
      import('./Dicier-Round-Light.scss')
    }
  } else if (mode === modes.FLAT) {
    if (weight === weights.DARK) {
      import('./Dicier-Flat-Dark.scss')
    } else if (weight === weights.HEAVY) {
      import('./Dicier-Flat-Heavy.scss')
    } else if (weight === weights.LIGHT) {
      import('./Dicier-Flat-Light.scss')
    }
  }
}

export default loadFont