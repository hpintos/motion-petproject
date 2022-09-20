import PrimitiveInjector from '@s-ui/react-primitive-injector'

import useRotate from '../hooks/useRotate.js'

// eslint-disable-next-line react/prop-types
const Rotate = ({toggle, degrees, children, style, className, ...props}) => {
  const {style: springStyles} = useRotate({toggle, degrees})

  return (
    <PrimitiveInjector
      style={{...style, ...springStyles}}
      className={className}
      {...props}
    >
      {children}
    </PrimitiveInjector>
  )
}

export default Rotate
