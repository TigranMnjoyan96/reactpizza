import React, { useState } from 'react'
import classNames from 'classnames'


export default () => {
    let [categories] = useState([
        'Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
    ])

    let [activeItem, setActiveItem] = useState(1)


    return(
        <div className="categories">
            <ul>
                {categories.map((category, index) => {
                    return(
                        <li key={index} onClick={() => setActiveItem(index)} className={classNames({'active': index === activeItem})}>{category}</li>
                    )
                })}
            </ul>
        </div>
    )
}