import {animated, useSpring} from '@react-spring/web'

// eslint-disable-next-line react/prop-types
const FadeIn = ({isVisible, children}) => {
  const styles = useSpring({
    opacity: isVisible ? 1 : 0
  })

  return <animated.div style={styles}>{children}</animated.div>
}

export default FadeIn
