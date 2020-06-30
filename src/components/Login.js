import React, { Component } from 'react'
import { connect } from 'react-redux'

class Login extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h2>Welcome to the Would You Rather App!</h2>
        <p>Please sign in to continue</p>
        <select>
          <option value="User" disabled selected>Select a User</option>
          {this.props.myUsers.map((user) => (
            <option value={user.name}>{user.name}</option>
          ))}
        </select>
        <div>
          <button>
            Sign In
          </button>
        </div>
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
