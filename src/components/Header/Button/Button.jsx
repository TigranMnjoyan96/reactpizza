import React, { useState } from 'react'
import classNames from 'classnames'



export default ({className, children, onClick}) => {

        return(
                <button className={classNames('button', {'button--cart': className})}>{children}</button>
        )
}