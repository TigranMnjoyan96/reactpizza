import React, { useState } from 'react'
import classNames from 'classnames'


export default () => {
    const [categories, setCategories] = useState([
        'Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'
    ])
    return(
        <div className="categories">
            <ul>
                {categories.map((category, index) => {
                    return(
                        <li className={classNames({'active': index === 0})}>{category}</li>
                    )
                })}
            </ul>
        </div>
    )
}