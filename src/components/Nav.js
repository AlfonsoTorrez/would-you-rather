import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  handleLogout = () => {
    console.log("logout!")
    this.props.dispatch(setAuthedUser('none'))
  }

  render(){
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leader' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
        </ul>
        { this.props.user === true
          ? null
          : <div>
              <p>Hello, {this.props.name}</p>
              <button onClick={this.handleLogout}>Logout</button>
            </div>
        }
      </nav>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    user: authedUser === 'none' || authedUser === null,
    name: authedUser
  }
}

export default connect(mapStateToProps)(Nav)
