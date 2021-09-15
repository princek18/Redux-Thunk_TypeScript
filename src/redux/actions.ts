import axios from "axios"
import { Action } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { stateType } from "./reducers"

export const fetch:ThunkAction<void, stateType, unknown, Action> = () => {
    return (dispatch:any) => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            dispatch({
                type: "FETCH",
                payload: response.data
            })
        })
        .catch((error) => {
            dispatch({
                type: "ERROR",
                payload: error.message
            })
        })
    }
}

export const delete_item = (id:number) => {
    return {
        type: "DELETE",
        payload: id
    }
}