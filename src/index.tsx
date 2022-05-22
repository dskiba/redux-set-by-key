import { render } from 'react-dom'
import { Provider, } from 'react-redux'

import App from './App'
import { setupStore } from './store'


export const store = setupStore()

const rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

