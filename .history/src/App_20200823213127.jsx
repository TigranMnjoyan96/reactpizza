import React, { Component } from 'react'
import { Header } from './components'
import { Home, Cart } from './pages/index'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import Pizza from './components/Pizza/Pizza'
import { setPizzas } from './redux/actions/pizzas';
import { setPizzas } from '../.history/src/redux/actions/pizzas_20200823210005';


class App extends Component {


    componentDidMount() {
        axios.get('http://localhost:3000/db.json')
            .then(res => {
                this.props.setPizzas(res.data.pizza)
            })
    }
    render() {
        console.log(this.props)
        return (
            <div className="wrapper">
            <Header />
            <div className="content">
               <Route path="/" component={() => <Home pizza={this.props.pizzas} />} exact />
                 <Route path="/cart" component={Cart} /> 
            </div>
        </div>

        )
    }    
    
}


const mapStateToProps = state => ({items: state.pizzasReducer})

const mapDispatcToProps = dispatch => {
    setPizzas
}

export default connect(mapStateToProps, mapDispatcToProps)(App)