import React, { useState } from 'react'
import classNames from 'classnames'


export default ({onClick}) => {
    let [categories, setCategories] = useState([
        'Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
    ])

    let [activeItem, setActiveItem] = useState(1)

     setCategories = (index) => {
         setActiveItem(index)
    }
    return(
        <div className="categories">
            <ul>
                {categories.map((category, index) => {
                    return(
                        <li onClick={() => setCategories(index)} className={classNames({'active': index === activeItem})}>{category}</li>
                    )
                })}
            </ul>
        </div>
    )
}