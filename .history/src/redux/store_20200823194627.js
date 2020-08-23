import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
    pizzas,
    filters
})

const store = createStore(rootReducer)

export default store