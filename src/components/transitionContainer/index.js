// eslint-disable-next-line react/prop-types
const TransitionContainer = ({children, onClick}) => {
  return (
    <div className="square" onClick={onClick}>
      {children}
    </div>
  )
}

export default TransitionContainer
