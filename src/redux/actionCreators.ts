import axios from "axios"
import { ThunkAction } from "redux-thunk"
import { DELETE, FETCH, ERROR } from "./actionTypes"
import { errorAction, fetchAction, storeState } from "./reducers"

export const fetch:() => ThunkAction<void, storeState, {}, fetchAction | errorAction> = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            dispatch({
                type: FETCH,
                payload: response.data
            })
        })
        .catch((error) => {
            dispatch({
                type: ERROR,
                payload: error.message
            })
        })
    }
}

export const delete_item = (id:number) => {
    return {
        type: DELETE,
        payload: id
    }
}