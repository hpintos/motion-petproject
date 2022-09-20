import {ANIMATIONS} from '../config.js'

export const INITIAL_STATE = {
  [ANIMATIONS.FADE]: false,
  [ANIMATIONS.COLOR]: false,
  [ANIMATIONS.TRANSFORM]: false,
  [ANIMATIONS.ROTATE]: false,
  [ANIMATIONS.TRANSLATE]: false
}

export const ACTIONS = {
  TOGGLE: 'toggleAnimation'
}

export const reducer = (state, {payload, type}) => {
  switch (type) {
    case 'toggleAnimation': {
      const {animation} = payload

      if (animation instanceof Array) {
        const partialState = animation.reduce((prev, current) => {
          return Object.assign(prev, {[current]: !state[current]})
        }, {})

        return {
          ...state,
          ...partialState
        }
      }

      return {
        ...state,
        [animation]: !state[animation]
      }
    }
    default:
      return state
  }
}
