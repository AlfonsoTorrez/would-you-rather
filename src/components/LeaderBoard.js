import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
  componentDidMount() {
    if(this.props.logged === true){
      this.props.history.push(`/`)
    }
  }

  render(){
    return(
      <div className="center">
        <div>
          <h1>Leader Board</h1>
        </div>
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
