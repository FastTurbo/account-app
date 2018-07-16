import { combineReducers } from 'redux'

import counter from './counter'
import user from './user'

const rootStore = combineReducers({
    counter,
    user
})

export default rootStore