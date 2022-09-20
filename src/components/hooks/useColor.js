import {animated, useSpring} from '@react-spring/web'

const useColor = ({toggle, color}) => {
  const springStyles = useSpring({
    background: toggle ? color : 'black'
  })

  return Object.assign([springStyles, animated], {
    style: springStyles,
    animated
  })
}
export default useColor
