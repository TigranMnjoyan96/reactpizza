import { createStore, combineReducers } from 'redux'
import pizzasReducer from './reducers/pizzas'
import filtersReducer from './reducers/filters'

const rootReducer = combineReducers({
    pizzasReducer,
    filtersReducer
})

const store = createStore(rootReducer)

export default store