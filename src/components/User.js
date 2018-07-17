import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get_user } from "../actions";

const mapStateToProps = state => {
    return {
        user:state.user
    }
}
@connect(mapStateToProps,{ get_user })
class User extends Component {
    render() {
        const { get_user }  = this.props
        const { isFetching,error,user} = this.props.user
        let data
        if(isFetching){
            data = 'Loading...'
        }else if(error){
            data = error
        }else{
            data = user
        }
        return (
            <div>
                <h1 className="text-center">{ data }</h1>
                <p className="text-center">
                    <button className="btn btn-success" onClick={() => get_user()}>GET USER</button>
                </p>

            </div>
        )
    }
}

export default User
