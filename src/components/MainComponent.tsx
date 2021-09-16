import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import { RootState } from '..'
import { delete_item, fetch } from '../redux/actionCreators'
import { stateType } from '../redux/reducers'

interface props{
    data: stateType[],
    actions:{
    fetch: () => void,
    delete_item: (id:number) => void
    }
}

const MainComponent:React.FC<props> = ({data, actions}) => {
    return (
        <div>
            <h1>This is MainComponent using connect()!</h1>
            <button onClick={actions.fetch}>Fetch</button>
            {data.map((one) => {
                return one.name?<h1 style={{cursor:"pointer"}} onClick={() => actions.delete_item(one.id)} key={one.id}>{one.name}</h1> : 
                <h1 key={one.id}>{one.error}</h1>
            })}
        </div>
    )
}

const mapStateToProps = (state:RootState) => {
    return{
        data: state.data
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
    return{
        actions: {
        fetch: bindActionCreators(fetch, dispatch),
        delete_item: bindActionCreators(delete_item, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)