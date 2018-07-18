import { GET_USER_FULFILLED, GET_USER_REJECTED, GET_USER_PENDING } from "../constants";

const initState = {
    isLoading:false,
    error:null,
    user:''
}

const user = (state = initState, action = {}) => {
    switch (action.type) {
        case GET_USER_PENDING:
            return {
                isLoading:true,
                error:null,
                user:''
            }
        case GET_USER_FULFILLED:
            return {
                isLoading:false,
                error:null,
                user:action.payload.data[0].title
            }
        case GET_USER_REJECTED:
            return {
                isLoading:false,
                error:action.payload.response.data,
                user:''
            }
        default:
            return state
    }
}

export default user