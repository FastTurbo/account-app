import { INCREMENT,DECREMENT } from "../constants";
import axios from 'axios'

export const increment = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type:INCREMENT
            })
        },2000)
    }
}

export const decrement = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type:DECREMENT
            })
        },2000)
    }
}

export const get_user = () => {
    return {
        type:'GET_USER',
        payload:axios.get('http://5b45cd9d872d12001429741a.mockapi.io/api/records')
    }
}