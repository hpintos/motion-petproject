import {animated, useSpring} from '@react-spring/web'

const useTranslate = ({toggle, x = 0, y = 0}) => {
  const springStyles = useSpring({
    x: toggle ? 0 : x,
    y: toggle ? 0 : y
  })

  return Object.assign([springStyles, animated], {
    style: springStyles,
    animated
  })
}
export default useTranslate
