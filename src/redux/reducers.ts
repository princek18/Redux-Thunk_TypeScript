import { Reducer } from "redux";
import {DELETE, FETCH, ERROR} from './actionTypes'

export interface stateType {
  id: number;
  name?: string;
  error?: string;
  username: string;
  email: string;
  phone: string;
}
export interface storeState{
    data: stateType[]
}

const intialState = {
    data: []
}

interface deleteAction{
    type: typeof DELETE,
    payload: number
}

interface fetchAction{
    type: typeof FETCH,
    payload: stateType[]
}

interface errorAction{
    type: typeof ERROR,
    payload: string
}

type actions = deleteAction | fetchAction | errorAction;

export const fetchReducer: Reducer<storeState, actions> = (
  state = intialState,
  action
) => {
  switch (action.type) {
    case FETCH:
      return {data: action.payload};
    case DELETE:        
        const pass =  {data: state.data.filter((one) => one.id !== action.payload)};
        return pass;
    case ERROR:
      state = {data : [
        {
          id: 1,
          error: action.payload,
          username: "",
          email: "",
          phone: "",
        },
      ]};
      return state;
    default:
      return state;
  }
};
