import * as types from '../constants'

export const increment = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type:types['INCREMENT']
            })
        },1800)
    }
}

export const decrement = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type:types['DECREMENT']
            })
        },2000)
    }
}