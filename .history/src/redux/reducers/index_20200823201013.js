import { combineReducer } from 'react-redux'
import pizzasReducer from './reducers/pizzas'
import filtersReducer from './reducers/filters'

const rootReducer = combineReducer({
    pizzasReducer,
    filtersReducer
})

export default rootReducer