import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'

class Nav extends Component {
  handleLogout = () => {
    this.props.dispatch(setAuthedUser('none'))
    this.props.history.push(`/`)
  }

  render(){
    return (
        <nav className='nav'>
          <ul>
            <li>
              <NavLink to='/' exact activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/add' activeClassName='active'>
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink to='/leader' activeClassName='active'>
                Leader Board
              </NavLink>
            </li>
            { this.props.logged === true
              ? null
              : <Fragment>
                  <li>
                    <img className="avatar" src={this.props.myUsers[this.props.user].avatarURL} alt={this.props.name} width="50" height="50"/>
                  </li>
                  <li>
                    Hello, {this.props.name}
                  </li>
                  <li>
                    <button className="btn" onClick={this.handleLogout}>Logout</button>
                  </li>
                </Fragment>

            }
        </ul>
      </nav>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  const ids = Object.keys(users)
  const user = ids.filter(id => users[id].name === authedUser)
  return {
    logged: authedUser === 'none' || authedUser === null,
    myUsers: users,
    name: authedUser,
    user
  }
}

export default withRouter(connect(mapStateToProps)(Nav))
