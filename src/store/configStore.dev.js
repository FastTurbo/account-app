import rootReducers from "../reducers";
import {applyMiddleware, createStore} from "redux";
import promise from "redux-promise-middleware";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";

const configStore = preloadState => {
    const store = createStore(
        rootReducers,
        preloadState,
        composeWithDevTools(applyMiddleware(logger,thunk,promise()))
    )

    if(process.env.NODE_ENV !== 'production'){
        if(module.hot){
            module.hot.accept('../reducers',() => {
                store.replaceReducer(rootReducers)
            })
        }
    }
    return store
}

export default configStore