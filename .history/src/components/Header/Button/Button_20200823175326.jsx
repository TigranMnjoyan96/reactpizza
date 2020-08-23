import React from 'react'
import classNames from 'classnames'
import store from '../../../redux/store'



export default ({className, children}) => {

        const incrementCount = () => {
                store.dispatch({type: 'INC'})
        }
        return(
                <button onClick={incrementCount()} className={classNames('button', {'button--cart': className})}>{children}</button>
        )
}