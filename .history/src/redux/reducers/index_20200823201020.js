import { combineReducers } from 'react-redux'
import pizzasReducer from './reducers/pizzas'
import filtersReducer from './reducers/filters'

const rootReducer = combineReducers({
    pizzasReducer,
    filtersReducer
})

export default rootReducer