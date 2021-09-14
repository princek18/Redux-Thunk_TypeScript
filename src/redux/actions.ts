import axios from "axios"

export const fetch = () => {
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