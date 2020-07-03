import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {

  state = {
    selectedName: ''
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({selectedName: e.target.value})
  }

  handleSubmit = (e) => {
    //Setting the User
    e.preventDefault()
    this.props.dispatch(setAuthedUser(this.state.selectedName))
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Welcome to the Would You Rather App!</h2>
        <p>Please sign in to continue</p>
        <form onSubmit={this.handleSubmit} >
        <select onChange={this.handleChange}>
          <option value="N/A" disabled selected>Select a User</option>
          {this.props.myUsers.map((user) => (
            <option value={user.name}>{user.name}</option>
          ))}
        </select>
          <div>
            <button type='submit'>
              Sign In
            </button>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    myUsers: Object.values(users)
  }
}

export default connect(mapStateToProps)(Login)
