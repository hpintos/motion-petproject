import {animated, useSpring} from '@react-spring/web'

const useFadeIn = ({toggle}) => {
  const springStyles = useSpring({
    opacity: toggle ? 1 : 0
  })

  return Object.assign([springStyles, animated], {
    style: springStyles,
    animated
  })
}
export default useFadeIn
