import React from 'react'
import { Header } from './components'
import { Route } from 'react-router-dom'
import Home from './pages/Home'


export default function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route path="/" component={Home}/>
            </div>
        </div>
    )
}