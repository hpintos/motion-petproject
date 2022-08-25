import {loadPage} from '@s-ui/react-initial-props'
import {IndexRoute, Route} from '@s-ui/react-router'

import contextFactory from './contextFactory.js'
import Layout from './layout.js'

const LoadHomePage = loadPage(contextFactory, () =>
  import(/* webpackChunkName: "HomePage" */ './pages/Home')
)

export default (
  <Route>
    <Route component={Layout}>
      <Route path="/">
        <IndexRoute getComponent={LoadHomePage} />
      </Route>
    </Route>
  </Route>
)
