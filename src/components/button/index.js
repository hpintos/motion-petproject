// eslint-disable-next-line react/prop-types
const Button = ({children, styles}) => {
  return (
    <div style={styles} className="button">
      {children}
    </div>
  )
}

export default Button
