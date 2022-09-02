const Basic = ({children}) => {
  return (
    <section>
      <h3>Transitions Presets: The basics</h3>
      <p>
        Contemplamos las transiciones más comunes para SUi, podemos ampliar el
        catálogo a futuro si fuera necesario.
      </p>
      <div className="basicTransitionsContainer">{children}</div>
    </section>
  )
}

export default Basic
