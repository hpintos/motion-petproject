// eslint-disable-next-line react/prop-types
const Section = ({title, description, children}) => {
  return (
    <section>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="transitionsContainer">{children}</div>
    </section>
  )
}

export default Section
