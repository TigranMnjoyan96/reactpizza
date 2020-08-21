import React, {useState, useEffect} from 'react'
import { Header } from './components'
import { Home, Cart } from './pages/index'
import { Route } from 'react-router-dom'


export default function App() {

    // State
    const [pizza, setPizza] = useState([])

    // Effect 
    useEffect(() => {
        fetch('http://localhost:3000/db.json').then(res => {
            setPizza(res)
        })
    }, [])

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route path="/" component={Home} exact />
                <Route path="/cart" component={Cart} />sssssssssss
                {pizza.map(e => {
                    return(
                        <h2>{e.name}</h2>
                    )
                })}
            </div>
        </div>
    )
}