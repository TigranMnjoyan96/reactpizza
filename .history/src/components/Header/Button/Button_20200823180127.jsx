import React from 'react'
import classNames from 'classnames'



export default ({className, children}) => {
        return(
                <button className={classNames('button', {'button--cart': className})}>{children}</button>
        )
}