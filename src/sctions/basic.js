import {useState} from 'react'

import {animated} from '@react-spring/web'

import Section from '../components/section/index.js'
import TransitionContainer from '../components/transitionContainer/index.js'
import Color from '../components/transitions/color.js'
import FadeIn from '../components/transitions/fadeIn.js'
import Rotate from '../components/transitions/rotate.js'
import Transform from '../components/transitions/transform.js'
import Translate from '../components/transitions/translate.js'

export const Basic = () => {
  const [toggle, setToggle] = useState(true)

  const title = 'Transitions Presets: The basics'
  const description =
    'Contemplamos las transiciones más comunes para SUi, podemos ampliar el catálogo a futuro si fuera necesario.'

  return (
    <Section title={title} description={description}>
      <TransitionContainer onClick={() => setToggle(!toggle)}>
        <FadeIn isVisible={toggle} className="button">
          <animated.div>fade</animated.div>
        </FadeIn>
      </TransitionContainer>
      <TransitionContainer onClick={() => setToggle(!toggle)}>
        <Color toggleColor={toggle} className="button" color="#278BFF">
          <animated.div>color</animated.div>
        </Color>
      </TransitionContainer>
      <TransitionContainer onClick={() => setToggle(!toggle)}>
        <Transform toggle={toggle} className="button">
          <animated.div>transform</animated.div>
        </Transform>
      </TransitionContainer>
      <TransitionContainer onClick={() => setToggle(!toggle)}>
        <Rotate toggle={toggle} className="button" degrees={180}>
          <animated.div>rotate</animated.div>
        </Rotate>
      </TransitionContainer>
      <TransitionContainer onClick={() => setToggle(!toggle)}>
        <Translate toggle={toggle} className="button" y={-40}>
          <animated.div>translate</animated.div>
        </Translate>
      </TransitionContainer>
      <TransitionContainer />
      <TransitionContainer />
    </Section>
  )
}
