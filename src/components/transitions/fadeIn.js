import PrimitiveInjector from '@s-ui/react-primitive-injector'

import useFadeIn from '../hooks/useFadeIn.js'

// eslint-disable-next-line react/prop-types
const FadeIn = ({isVisible, children, style, className, ...props}) => {
  /**
   * Destructure animation hook as an Array to get the styles
   */
  const [springStyles] = useFadeIn({toggle: isVisible})

  return (
    /**
     * Use PrimitiveInjector to pass down the properties to the children.
     * Syles are merged with the sytles obtained from the animation hook.
     */
    <PrimitiveInjector
      style={{...style, ...springStyles}}
      className={className}
      {...props}
    >
      {children}
    </PrimitiveInjector>
  )
}

export default FadeIn
