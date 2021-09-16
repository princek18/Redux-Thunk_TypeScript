import { Reducer } from "redux";
import { DELETE, FETCH, ERROR } from "./actionTypes"
export interface stateType{
    id: number,
    name?: string,
    error?: string,
    username: string,
    email: string,
    phone: string
}

interface storeState{
  data: stateType[];
}

const initialState = {
  data: []
}

export interface fetchAction{
  type: typeof FETCH,
  payload: stateType[]
}

export interface errorAction{
  type: typeof ERROR,
  payload: string
}

export interface deleteAction{
  type: typeof DELETE,
  payload: number
}

type Actions = fetchAction | deleteAction | errorAction;

export const fetchReducer:Reducer<storeState, Actions> = (state = initialState, action) => {
    switch(action.type){
        case FETCH:
            return {data: action.payload};
        case DELETE:
            const pass = {data: state.data.filter((one) => one.id !== action.payload)}
            return pass;
        case ERROR:
            state = { data: [{
                id: 1,
                error: action.payload,
                username: "",
                email: "",
                phone: ""
            }]}
            return state
        default:
            return state
    }
}