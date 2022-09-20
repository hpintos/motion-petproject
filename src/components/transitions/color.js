import PrimitiveInjector from '@s-ui/react-primitive-injector'

import useColor from '../hooks/useColor.js'

// eslint-disable-next-line react/prop-types
const Color = ({toggleColor, color, children, style, className, ...props}) => {
  /**
   * An example that we can also destructure the hook as an object, as well
   * as an Array (see useFadeIn) in order to get the animation styles
   */
  const {style: springStyles} = useColor({toggle: toggleColor, color})

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

export default Color
