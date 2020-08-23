import React, { Component } from 'react'
import { Header } from './components'
import { Home, Cart } from './pages/index'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import Pizza from './components/Pizza/Pizza'


class App extends Component {

    render() {
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
    
}


export default