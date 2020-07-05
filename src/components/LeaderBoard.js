import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './Login'

class LeaderBoard extends Component {
  render(){
    return(
      <div>
        {this.props.logged === true
          ? <Login/>
          : <div>
              <h1>Leader Board</h1>
            </div>}
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    logged: authedUser === 'none'
  }
}

export default connect(mapStateToProps)(LeaderBoard)
