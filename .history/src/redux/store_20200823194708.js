import { createStore, combineReducers } from 'redux'
import pizzas from './reducers/pizzas'
import filters from './reducers/filters'

const rootReducer = combineReducers({
    pizzas,
    filters
})

const store = createStore(rootReducer)

export default store