const Header = ({library}) => {
  return (
    <>
      <nav className="navigator">
        <a href="/">React-spring</a> |<a href="/framer">Framer Motion</a>
      </nav>
      <h1>Transitions (with {library})</h1>
      <p>
        Nuestros componentes/pantallas pueden tener asociadas unas transiciones,
        generando de esta manera interacciones/microinteracciones. Puedes
        utilizar varios tipos, personalizar la duración, su aceleración, su
        dirección, delay o loop.
      </p>
      <p>
        En su conjunto, coreografían nuestros productos. Combinando de forma
        correcta sus propiedades, podrás generar una experiencia que represente
        a tu marca y hacer que los usuarios se identifiquen con ella.
      </p>
    </>
  )
}

export default Header
