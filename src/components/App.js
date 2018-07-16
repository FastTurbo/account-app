import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class App extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="text-center">{this.props.counter}</h2>
                <p className="text-center">
                    <button className="btn btn-primary">Increment</button>
                    <button className="btn btn-danger">Decrement</button>
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter:state.counter
    }
}

App.propTypes = {
    counter:PropTypes.number.isRequired
}

export default connect(mapStateToProps)(App)