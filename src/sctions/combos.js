import {useReducer} from 'react'

import {animated} from '@react-spring/web'

import Section from '../components/section/index.js'
import TransitionContainer from '../components/transitionContainer/index.js'
import Color from '../components/transitions/color.js'
import Transform from '../components/transitions/transform.js'
import {ANIMATIONS} from '../config.js'
import {ACTIONS, INITIAL_STATE, reducer} from './reducer.js'

export const Combos = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const title = 'Transitions Presets: Combos examples'
  const description =
    'Puedes combinar los presets anteriores según tus necesidades.'

  const _handleClick = animation => {
    dispatch({
      payload: {animation},
      type: ACTIONS.TOGGLE
    })
  }

  return (
    <Section title={title} description={description}>
      <TransitionContainer
        onClick={() => _handleClick([ANIMATIONS.TRANSFORM, ANIMATIONS.COLOR])}
      >
        <Color toggleColor={state[ANIMATIONS.COLOR]} color="red">
          <Transform toggle={state[ANIMATIONS.TRANSFORM]}>
            <animated.div className="button">transform & color</animated.div>
          </Transform>
        </Color>
      </TransitionContainer>
    </Section>
  )
}
