import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import './scss/app.scss'
import App from './App'



const initialState = 0

function counter(state = initialState, action) {
    switch(action.type) {
        case 'inc': return state + 1
        case 'dec': return state - 1
        default: return state
    }
}


const store = createStore(counter)

store.subscribe(() => console.log(`state equals: ${store.getState()}`))

console.log(store.getState())
store.dispatch({type: 'inc'})
store.dispatch({type: 'inc'})
store.dispatch({type: 'inc'})
store.dispatch({type: 'inc'})
store.dispatch({type: 'inc'})



ReactDOM.render(

    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
