import {animated, useSpring} from '@react-spring/web'

const useRotate = ({toggle, degrees}) => {
  const springStyles = useSpring({
    rotateZ: toggle ? degrees : 0
  })

  return Object.assign([springStyles, animated], {
    style: springStyles,
    animated
  })
}
export default useRotate
