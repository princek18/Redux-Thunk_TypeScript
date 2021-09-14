import React from 'react'
import { connect } from 'react-redux'
import { delete_item, fetch } from '../redux/actions'
import {stateType} from '../redux/reducers'

interface props{
    data: stateType[],
    fetch: () => void,
    delete_item: (id:number) => void
}

const MainComponent:React.FC<props> = ({data, fetch, delete_item}) => {
    return (
        <div>
            <h1>This is MainComponent using connect()!</h1>
            <button onClick={fetch}>Fetch</button>
            {data.map((one) => {
                return one.name?<h1 style={{cursor:"pointer"}} onClick={() => delete_item(one.id)} key={one.id}>{one.name}</h1> : 
                <h1 key={one.id}>{one.error}</h1>
            })}
        </div>
    )
}

const mapStateToProps = (state:stateType[]) => {
    return{
        data: state
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return{
        fetch: () => dispatch(fetch()),
        delete_item: (id:number) => dispatch(delete_item(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)