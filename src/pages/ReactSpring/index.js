import {useState} from 'react'

import Basic from '../../components/basics/index.js'
import Button from '../../components/button/index.js'
import Header from '../../components/header/index.js'
import TransitionContainer from '../../components/transitionContainer/index.js'
import FadeIn from '../../components/transitions/fadeIn.js'

export default function ReactSpringPage() {
  const [toggle, setToggle] = useState(true)
  return (
    <div className="home">
      <Header library="react-spring" />
      <Basic>
        <TransitionContainer onClick={() => setToggle(!toggle)}>
          <FadeIn isVisible={toggle}>
            <Button>fade</Button>
          </FadeIn>
        </TransitionContainer>
        <TransitionContainer />
        <TransitionContainer />
        <TransitionContainer />
        <TransitionContainer />
      </Basic>
    </div>
  )
}
