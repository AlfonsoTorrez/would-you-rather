import React, { Component } from 'react'
import { connect } from 'react-redux'


class QuestionPage extends Component {
  render() {
    return (
      <div className="center">
        <h1>Question Page</h1>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    logged: authedUser === 'none'
  }
}

export default connect(mapStateToProps)(QuestionPage)
