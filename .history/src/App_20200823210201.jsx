import React, { Component } from 'react'
import { Header } from './components'
import { Home, Cart } from './pages/index'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import Pizza from './components/Pizza/Pizza'
import store from './redux/store'
import { setPizzas } from './redux/actions/pizzas';


class App extends Component {

    state = {
        pizzas: []
    }

    componentDidMount() {
        axios.get('http://localhost:3000/db.json')
            .then(res => {
                store.dispatch(setPizzas(res))
            })
    }
    render() {
        return (
            <div className="wrapper">
            <Header />
            <div className="content">
                 {/* <Route path="/" component={() => <Home pizza={this.state.pizza} />} exact />
                 <Route path="/cart" component={Cart} />  */}
            </div>
        </div>

        )
    }    
    
}


export default connect()(App)