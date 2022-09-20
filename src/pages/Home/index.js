import Header from '../../components/header/index.js'
import {Basic} from '../../sctions/basic.js'
import {Combos} from '../../sctions/combos.js'

export default function ReactSpringPage() {
  /**
   * TODO:
   * Pasar a hook
   * +
   * Scale
   * Translate
   */
  return (
    <div className="home">
      <Header />
      <Basic />
      <Combos />
    </div>
  )
}
