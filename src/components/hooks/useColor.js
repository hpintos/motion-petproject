import {animated, useSpring} from '@react-spring/web'

const useColor = ({toggle, color}) => {
  /**
   * The 'auto' property value for background it doesnt really exist,
   * what it does is not override the background property
   */
  const springStyles = useSpring({
    background: toggle ? 'black' : color
  })

  return Object.assign([springStyles, animated], {
    style: springStyles,
    animated
  })
}
export default useColor
