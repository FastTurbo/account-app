import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

const configureStore = preloadedState => {
    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, promise()))
    )
    return store
}

export default configureStore