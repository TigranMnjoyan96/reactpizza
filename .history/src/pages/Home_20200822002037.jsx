import React from 'react'
import {Categories, Sort, Pizza} from '../components'



export default () => {
    return(
        <div className="container">
                    <div className="content__top">
                        <Categories />
                        <Sort />

                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        <Pizza />
                     </div>
                </div>
    )
}