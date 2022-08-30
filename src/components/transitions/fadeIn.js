import {animated, useSpring} from '@react-spring/web'

// eslint-disable-next-line react/prop-types
const FadeIn = ({isVisible, children}) => {
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    // color: isVisible ? 'black' : 'red',
    // config: {duration: 300},
    reverse: true
  })

  return <animated.div style={styles}>{children}</animated.div>
}

export default FadeIn
