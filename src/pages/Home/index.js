import Helmet from 'react-helmet'

import ReactSpringWrapper from '../../components/react-spring/index.js'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="http://spa.mock/" />
      </Helmet>
      <ReactSpringWrapper />
    </>
  )
}
