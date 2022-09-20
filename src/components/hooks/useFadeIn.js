import {animated, useSpring} from '@react-spring/web'

const useFadeIn = ({toggle}) => {
  const springStyles = useSpring({
    opacity: toggle ? 0 : 1
  })

  return Object.assign([springStyles, animated], {
    style: springStyles,
    animated
  })
}
export default useFadeIn
