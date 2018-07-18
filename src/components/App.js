import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment,decrement } from "../actions";
import User from './User'

const mapStateToProps = state => {
    return {
        counter:state.counter
    }
}

@connect(mapStateToProps,{ increment,decrement })
class App extends Component {

    render(){
        const { increment,decrement } = this.props
        const { counter } = this.props
        return (
            <div className="container text-center">
                <h2>{ counter }</h2>
                <p>
                    <button className="btn btn-primary" onClick={() => increment()}>Increment</button>
                    <button className="btn btn-danger" onClick={() => decrement()}>Decrement</button>
                </p>
                <User/>
            </div>
        )
    }
}

export default App