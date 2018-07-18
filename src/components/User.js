import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { get_user } from "../actions";

const mapStateToProps = state => {
    return {
        user:state.user
    }
}

@connect(mapStateToProps, { get_user })
class User extends Component{

    render() {

        const { isLoading,error,user } = this.props.user
        const { get_user } = this.props
        let data
        if(isLoading){
            data = 'Loading...'
        }else if(error){
            data = error
        }else{
            data = user
        }
        return (
            <div className="text-center">
                <h1>{ data }</h1>
                <p>
                    <button className="btn btn-success" onClick={() => get_user()}>GET USER</button>
                </p>
            </div>
        )
    }
}

export default User