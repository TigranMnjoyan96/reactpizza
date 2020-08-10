import React, { useState } from 'react'
import classNames from 'classnames'



export default (props) => {

        const{className, children} = props
        return(
                <button className={classNames('button', {'button--cart': className})}>{children}</button>
        )
}