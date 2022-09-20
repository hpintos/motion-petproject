import {animated, useSpring} from '@react-spring/web'

const useTransform = ({toggle}) => {
  const springStyles = useSpring({
    width: toggle ? '120px' : '104px',
    height: toggle ? '120px' : '43px',
    borderRadius: toggle ? '50%' : '4px'
  })

  return Object.assign([springStyles, animated], {
    style: springStyles,
    animated
  })
}
export default useTransform
