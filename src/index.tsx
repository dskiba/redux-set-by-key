import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import { combineReducers, createStore } from 'redux'
import { userReducer } from './store'


const reducers = combineReducers({
  user: userReducer
})

export const store = createStore(reducers)

const rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
