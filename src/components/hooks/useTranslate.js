import {animated, useSpring} from '@react-spring/web'

const useTranslate = ({toggle, x = 0, y = 0}) => {
  const springStyles = useSpring({
    x: toggle ? x : 0,
    y: toggle ? y : 0
  })

  return Object.assign([springStyles, animated], {
    style: springStyles,
    animated
  })
}
export default useTranslate
