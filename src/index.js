import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import { createStore,applyMiddleware } from 'redux'
import rootReducers from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


const store = createStore(rootReducers,applyMiddleware(logger,thunk))

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)