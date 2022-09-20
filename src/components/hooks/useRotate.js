import {animated, useSpring} from '@react-spring/web'

const useRotate = ({toggle, degrees}) => {
  const springStyles = useSpring({
    rotateZ: toggle ? 0 : degrees
  })

  return Object.assign([springStyles, animated], {
    style: springStyles,
    animated
  })
}
export default useRotate
