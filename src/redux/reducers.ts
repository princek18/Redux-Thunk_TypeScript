export interface stateType{
    id: number,
    name?: string,
    error?: string,
    username: string,
    email: string,
    phone: string
}

interface action{
    type: string,
    payload: any
}

export const fetchReducer = (state: stateType[] = [], action:action) => {
    switch(action.type){
        case "FETCH":
            state = action.payload
            return state;
        case "DELETE":
            return state.filter((one) => one.id !== action.payload)
        case "ERROR":
            state = [{
                id: 1,
                error: action.payload,
                username: "",
                email: "",
                phone: ""
            }]
            return state
        default:
            return state
    }
}