import {loadPage} from '@s-ui/react-initial-props'
import {IndexRoute, Route} from '@s-ui/react-router'

import contextFactory from './contextFactory.js'
import Layout from './layout.js'

const LoadReactSpring = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "ReactSpringPage" */ './pages/Home/index.js')
)

export default (
  <Route component={Layout}>
    <Route path="/">
      <IndexRoute getComponent={LoadReactSpring} />
    </Route>
  </Route>
)
