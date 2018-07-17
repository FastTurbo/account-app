import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import configStore from './store/configStore'
const store = configStore()

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)

if(module.hot){
    module.hot.accept('./components/App',() => {
        ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
            document.getElementById('root')
        )
    })
}