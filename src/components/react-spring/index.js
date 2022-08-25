/* eslint-disable react/prop-types */
import {useState} from 'react'

import {animated, useSpring} from '@react-spring/web'

const FadeIn = ({isVisible, children}) => {
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    from: {x: 0},
    to: {x: 500},
    config: {duration: 5000},
    loop: {reverse: true}
  })

  return <animated.div style={styles}>{children}</animated.div>
}

const ReactSpringWrapper = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <div style={{padding: '20px', border: '1px solid green'}}>
      <FadeIn isVisible={toggle}>
        <h1 onClick={() => setToggle(!toggle)}>HELLO</h1>
      </FadeIn>
    </div>
  )
}

export default ReactSpringWrapper
