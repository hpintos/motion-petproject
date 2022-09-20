import PrimitiveInjector from '@s-ui/react-primitive-injector'

import useTranslate from '../hooks/useTranslate.js'

// eslint-disable-next-line react/prop-types
const Translate = ({toggle, x, y, children, style, className, ...props}) => {
  const {style: springStyles} = useTranslate({toggle, x, y})

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

export default Translate
