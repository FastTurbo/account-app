import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { increment,decrement} from "../actions";
import { bindActionCreators } from 'redux'

class App extends Component{
    render(){
        return (
            <div className="container">
                <h1 className="text-center">{this.props.counter}</h1>
                <p className="text-center">
                    <button className="btn btn-primary" onClick={() => this.props.increment()}>Increment</button>
                    <button className="btn btn-danger" onClick={() => this.props.decrement()}>Decrement</button>
                </p>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({increment,decrement},dispatch)
}

const mapStateToProps = state => {
    return {
        counter:state.counter
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
