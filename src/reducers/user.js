import { LOAD_USER_FULFILLED ,LOAD_USER_PENDGING,LOAD_USER_REJECTED} from "../constants";

const initState = {
    isFetching:false,
    error:null,
    user:''
}

const user = (state = initState, action = {}) => {
    switch (action.type) {
        case LOAD_USER_PENDGING:
            return {
                isFetching:true,
                error:null,
                user:''
            }
        case LOAD_USER_FULFILLED:
            return {
                isFetching:false,
                error:null,
                user:action.payload.data[0].title
            }
        case LOAD_USER_REJECTED:
            console.log(action.payload)
            return {
                isFetching:false,
                error:action.payload.message,
                user:''
            }
        default:
            return state
    }
}

export default user