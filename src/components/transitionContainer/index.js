const TransitionContainer = ({children, onClick}) => {
  return (
    <div className="square" onClick={onClick}>
      {children}
    </div>
  )
}

export default TransitionContainer
