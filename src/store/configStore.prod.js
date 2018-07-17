import rootReducers from "../reducers";
import {applyMiddleware, createStore} from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";

const configStore = preloadState => {
    const store = createStore(
        rootReducers,
        preloadState,
        applyMiddleware(thunk,promise())
    )

    return store
}

export default configStore