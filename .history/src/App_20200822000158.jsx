import React, {useState, useEffect} from 'react'
import { Header } from './components'
import { Home, Cart } from './pages/index'
import { Route } from 'react-router-dom'
import axios from 'axios'


export default function App() {

    // State
    const [pizza, setPizza] = useState([])

    // Effect 
    useEffect(() => {
        
    }, [])

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route path="/" component={Home} exact />
                <Route path="/cart" component={Cart} />
                <div>sssssssssss</div> 
                {pizza.map(e => {
                    return(
                        <h2>{e.name}</h2>
                    )
                })}
            </div>
        </div>
    )
}