import React from 'react'
import { Header } from './components'


export default function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Router path="/" component={Home}/>
            </div>
        </div>
    )
}