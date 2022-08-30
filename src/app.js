import ReactDOM from 'react-dom'

import {withContext} from '@s-ui/hoc'
import Context from '@s-ui/react-context'
import {createClientContextFactoryParams} from '@s-ui/react-initial-props'
import {match, Router} from '@s-ui/react-router'

import contextFactory from './contextFactory.js'
import routes from './routes.js'

import './index.scss'

contextFactory(createClientContextFactoryParams()).then(context => {
  match({routes}, (err, _, renderProps) => {
    if (err) console.error(err) // eslint-disable-line no-console

    const App = withContext(context)(Router)
    ReactDOM.render(
      <Context.Provider value={context}>
        <App {...renderProps} />
      </Context.Provider>,
      document.getElementById('app')
    )
  })
})
