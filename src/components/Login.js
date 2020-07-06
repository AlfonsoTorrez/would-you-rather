import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    selectedName: null
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({selectedName: e.target.value})
  }

  handleSubmit = (e) => {
    //Setting the User
    e.preventDefault()
    if(this.state.selectedName !== null){
      this.props.dispatch(setAuthedUser(this.state.selectedName))
    }
  }

  render(){
    return(
      <div className="center">
          <h2>Welcome to the Would You Rather App!</h2>
          <p>Please sign in to continue</p>
          <form onSubmit={this.handleSubmit} >
          <select onChange={this.handleChange}>
            <option value='none'>Select a User</option>
            {this.props.myUsers.map((user) => (
              <option key={user.name} value={user.name}>{user.name}</option>
            ))}
          </select>
            <div>
              <button className="btn" type='submit'>
                Sign In
              </button>
            </div>
          </form>
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    myUsers: Object.values(users),
  }
}

export default connect(mapStateToProps)(Login)
