import React, {useState, useEffect} from 'react'
import { Header } from './components'
import { Home, Cart } from './pages/index'
import { Route } from 'react-router-dom'
import axios from 'axios'
import Pizza from './components/Pizza/Pizza'


export default function App() {

    // State
    const [pizza, setPizza] = useState([])

    // Effect 
    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(res => {
                setPizza(res.data.pizza)
            })
    }, [])

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route path="/" component={() => <Home pizza={pizza} />} exact />
                <Route path="/cart" component={Cart} />
            </div>
        </div>
    )
}