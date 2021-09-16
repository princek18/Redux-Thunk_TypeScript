import axios from "axios"
import { ThunkAction } from "redux-thunk"
import { RootState } from ".."
import { DELETE, FETCH, ERROR } from "./actionTypes"
import { errorAction, fetchAction } from "./reducers"

type Actions = fetchAction | errorAction

export const fetch = ():ThunkAction<void, RootState, {}, Actions> => {
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