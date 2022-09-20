import PrimitiveInjector from '@s-ui/react-primitive-injector'

import useTransform from '../hooks/useTransform.js'

// eslint-disable-next-line react/prop-types
const Transform = ({toggle, children, style, className, ...props}) => {
  const {style: springStyles} = useTransform({toggle})

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

export default Transform
