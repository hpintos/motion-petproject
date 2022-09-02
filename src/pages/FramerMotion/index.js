import Basic from '../../components/basics/index.js'
import Header from '../../components/header/index.js'
import TransitionContainer from '../../components/transitionContainer/index.js'

export default function FramerMotionPage() {
  return (
    <div className="home">
      <Header library="framer motion" />
      <Basic>
        <TransitionContainer />
        <TransitionContainer />
        <TransitionContainer />
        <TransitionContainer />
      </Basic>
    </div>
  )
}
