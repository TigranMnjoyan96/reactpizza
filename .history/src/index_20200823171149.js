import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import './scss/app.scss'
import App from './App'



const initialState = 0

function counter(initialState = 0, action) {
    switch(action.type) {
        case 'inc': return initialState++
        case 'dec': return initialState--
        default: return initialState
    }
}


let store = createStore(counter)

store.subscribe(() => console.log(`state equals: ${store.getState()}`))

store.dispatch({type: 'inc'})

store.subscribe(() => console.log(`state equals: ${store.getState()}`))

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
