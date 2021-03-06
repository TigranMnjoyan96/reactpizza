import { createStore } from 'redux'


function counter(state, action) {
    switch(action.type) {
        case 'INC': return state + 1
        case 'DEC': return state - 1
        default: return state
    }
}


export store = createStore(counter)