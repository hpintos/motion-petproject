import {animated, useSpring} from '@react-spring/web'

const useTransform = ({toggle}) => {
  const springStyles = useSpring({
    width: toggle ? '104px' : '120px',
    height: toggle ? '43px' : '120px',
    borderRadius: toggle ? '4px' : '50%'
  })

  return Object.assign([springStyles, animated], {
    style: springStyles,
    animated
  })
}
export default useTransform
