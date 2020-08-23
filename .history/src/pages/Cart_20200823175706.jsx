import React from 'react'
import store from '../redux/store'

export default () => {
    return(
        <div>
            <h2 onClick={() => store.dispatch({type: 'INC'})}>Cart page</h2>
        </div>
    )
}