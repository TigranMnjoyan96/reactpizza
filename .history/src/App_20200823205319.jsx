import React, { Component } from 'react'
import { Header } from './components'
import { Home, Cart } from './pages/index'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import Pizza from './components/Pizza/Pizza'


class App extends Component {

    state = {
        pizzas: []
    }

    componentDidMount() {
        axios.get('http://localhost:3000/db.json')
            .then(res => {
                console.log(res)
                // this.setState({
                //     pizzas: res.data
                // })
            })
    }
    render() {
        return (
            <div className="wrapper">
            <Header />
            <div className="content">
                {/* <Route path="/" component={() => <Home pizza={pizza} />} exact />
                <Route path="/cart" component={Cart} /> */}
            </div>
        </div>

        )
    }    
    
}


export default connect()(App)