import {loadPage} from '@s-ui/react-initial-props'
import {IndexRoute, Route} from '@s-ui/react-router'

import contextFactory from './contextFactory.js'
import Layout from './layout.js'

const LoadReactSpring = loadPage(contextFactory, () =>
  import(
    /* webpackChunkName: "ReactSpringPage" */ './pages/ReactSpring/index.js'
  )
)

const LoadReactFramerMotion = loadPage(contextFactory, () =>
  import(
    /* webpackChunkName: "FramerMotionPage" */ './pages/FramerMotion/index.js'
  )
)

export default (
  <Route component={Layout}>
    <Route path="/">
      <IndexRoute getComponent={LoadReactSpring} />
    </Route>
    <Route path="/framer">
      <IndexRoute getComponent={LoadReactFramerMotion} />
    </Route>
  </Route>
)
