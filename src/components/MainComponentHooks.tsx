import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { delete_item, fetch } from '../redux/actions'
import { stateType } from '../redux/reducers'

export const MainComponentHooks:React.FC = () => {
    const data = useSelector((state:stateType[]) => state);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>This is MainComponent with Hooks!</h1>
            {/* <button onClick={() => dispatch(fetch())}>Fetch</button> */}
            {data.map((one) => {
                return one.name?<h1 style={{cursor:"pointer"}} onClick={() => dispatch(delete_item(one.id))} key={one.id}>{one.name}</h1>:
                <h1>{one.error}</h1>
            })}
        </div>
    )
}
