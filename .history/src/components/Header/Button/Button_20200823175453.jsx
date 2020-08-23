import React from 'react'
import classNames from 'classnames'
import store from '../../../redux/store'



export default ({className, children}) => {
        return(
                <button className={classNames('button', {'button--cart': className})}>{children}</button>
        )
}