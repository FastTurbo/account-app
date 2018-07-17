import {INCREMENT,DECREMENT} from '../constants'
import { FETCH_USER_ERROR,FETCH_USER_REQUEST,FETCH_USER_SUCCESS } from "../constants";
import  { LOAD_USER } from "../constants";
import axios from 'axios'


export const increment = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type:INCREMENT
            })
        },1800)
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
        type:LOAD_USER,
        payload:{
            promise:axios.get('http://5b45cd9d872d12001429741a.mockapi.io/api/records')
        }
    }
}