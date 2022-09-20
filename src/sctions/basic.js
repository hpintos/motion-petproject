import {useReducer} from 'react'

import {animated} from '@react-spring/web'

import Section from '../components/section/index.js'
import TransitionContainer from '../components/transitionContainer/index.js'
import Color from '../components/transitions/color.js'
import FadeIn from '../components/transitions/fadeIn.js'
import Rotate from '../components/transitions/rotate.js'
import Transform from '../components/transitions/transform.js'
import Translate from '../components/transitions/translate.js'
import {ANIMATIONS} from '../config.js'
import {ACTIONS, INITIAL_STATE, reducer} from './reducer.js'

export const Basic = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const title = 'Transitions Presets: The basics'
  const description =
    'Contemplamos las transiciones más comunes para SUi, podemos ampliar el catálogo a futuro si fuera necesario.'

  const _handleClick = animation => {
    dispatch({
      payload: {animation},
      type: ACTIONS.TOGGLE
    })
  }

  return (
    <Section title={title} description={description}>
      <TransitionContainer onClick={() => _handleClick(ANIMATIONS.FADE)}>
        <FadeIn isVisible={state[ANIMATIONS.FADE]} className="button">
          <animated.div>fade</animated.div>
        </FadeIn>
      </TransitionContainer>
      <TransitionContainer onClick={() => _handleClick(ANIMATIONS.COLOR)}>
        <Color
          toggleColor={state[ANIMATIONS.COLOR]}
          className="button"
          color="#278BFF"
        >
          <animated.div>color</animated.div>
        </Color>
      </TransitionContainer>
      <TransitionContainer onClick={() => _handleClick(ANIMATIONS.TRANSFORM)}>
        <Transform toggle={state[ANIMATIONS.TRANSFORM]} className="button">
          <animated.div>transform</animated.div>
        </Transform>
      </TransitionContainer>
      <TransitionContainer onClick={() => _handleClick(ANIMATIONS.ROTATE)}>
        <Rotate
          toggle={state[ANIMATIONS.ROTATE]}
          className="button"
          degrees={180}
        >
          <animated.div>rotate</animated.div>
        </Rotate>
      </TransitionContainer>
      <TransitionContainer onClick={() => _handleClick(ANIMATIONS.TRANSLATE)}>
        <Translate
          toggle={state[ANIMATIONS.TRANSLATE]}
          className="button"
          y={-40}
        >
          <animated.div>translate</animated.div>
        </Translate>
      </TransitionContainer>
      <TransitionContainer />
      <TransitionContainer />
    </Section>
  )
}
