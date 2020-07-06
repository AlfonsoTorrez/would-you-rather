import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
  render(){
    const { question } = this.props

    if (question === null) {
      return <p>This Tweet doesn't existd</p>
    }

    const {
      id, author, timestamp, optionOne, optionTwo
    } = question
    return(
      <Link to={`/question/${id}`}>
        <div className="card">
          <div className="content">
            <h4><b>{this.props.name} asks:</b></h4>
          </div>
            <img className="avatar" src={this.props.myUsers[this.props.userID].avatarURL} alt={this.props.name} width="100" height="100"/>
            <h4><b>Would You Rather?</b></h4>
            <p>{this.props.question.optionOne.text} or ....</p>
            <button className="btn">View Poll</button>
        </div>
      </Link>
    )
  }
}

function mapStateToProps ({ users, questions, authedUser}, { id }) {
  const question = questions[id]
  return {
    question,
    myUsers: users,
    name: users[question.author].name,
    userID: users[question.author].id
  }
}

export default withRouter(connect(mapStateToProps)(Question))
