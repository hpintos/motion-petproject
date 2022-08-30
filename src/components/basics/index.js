import {useState} from 'react'

import Button from '../button/index.js'
import TransitionContainer from '../transitionContainer/index.js'
import FadeIn from '../transitions/fadeIn.js'

const Basic = () => {
  const [toggle, setToggle] = useState(true)

  return (
    <section>
      <h3>Transitions Presets: The basics</h3>
      <p>
        Contemplamos las transiciones más comunes para SUi, podemos ampliar el
        catálogo a futuro si fuera necesario.
      </p>
      <div className="basicTransitionsContainer">
        <TransitionContainer>
          <FadeIn isVisible={toggle}>
            <Button onClick={() => setToggle(false)}>fade</Button>
          </FadeIn>
        </TransitionContainer>
        <TransitionContainer />
        <TransitionContainer />
        <TransitionContainer />
        <TransitionContainer />
        <TransitionContainer />
        <TransitionContainer />
      </div>
    </section>
  )
}

export default Basic
