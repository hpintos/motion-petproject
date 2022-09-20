import {useState} from 'react'

import {animated} from '@react-spring/web'

import Section from '../components/section/index.js'
import TransitionContainer from '../components/transitionContainer/index.js'
import Color from '../components/transitions/color.js'
import Transform from '../components/transitions/transform.js'

export const Combos = () => {
  const [toggle, setToggle] = useState(true)

  const title = 'Transitions Presets: Combos examples'
  const description =
    'Puedes combinar los presets anteriores según tus necesidades.'

  return (
    <Section title={title} description={description}>
      <TransitionContainer onClick={() => setToggle(!toggle)}>
        <Color toggleColor={toggle} color="red">
          <Transform toggle={toggle}>
            <animated.div className="button">transform & color</animated.div>
          </Transform>
        </Color>
      </TransitionContainer>
    </Section>
  )
}
