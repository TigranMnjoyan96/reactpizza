import React, { Component } from 'react'
import { Header } from './components'
import { Home, Cart } from './pages/index'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import Pizza from './components/Pizza/Pizza'
import { setPizzas } from './redux/actions/pizzas';


class App extends Component {


    componentDidMount() {
        axios.get('http://localhost:3000/db.json')
            .then(res => {
                console.log(this.props, 9)
                this.props.setPizzas(res.data.pizza)
            })
    }
    render() {
        console.log(this.props.items.items, 555)
        return (
            <div className="wrapper">
            <Header />
            <div className="content">
               <Route path="/" component={() => <Home pizza={this.props.items.items} />} exact />
                 <Route path="/cart" component={Cart} /> 
            </div>
        </div>

        )
    }    
    
}


const mapStateToProps = state => ({items: state.pizzasReducer})

const mapDispatcToProps = dispatch => {
    return {
        setPizzas: items => dispatch(setPizzas(items))
    }
}

export default connect(mapStateToProps, mapDispatcToProps)(App)