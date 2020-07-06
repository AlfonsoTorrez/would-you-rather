import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Question extends Component {
  render(){
    const { question } = this.props

    if (question === null) {
      return <p>This Tweet doesn't existd</p>
    }


    return(
      <Link to={`/question/${this.props.questionID}`}>
        <div className="card">
          <div className="content">
            <h4><b>{this.props.name} asks:</b></h4>
          </div>
            <img className="avatar" src={this.props.avatarURL} alt={this.props.name} width="100" height="100"/>
            <h4><b>Would You Rather?</b></h4>
            <p>{this.props.optionOneText} or ....</p>
            <button className="btn">View Poll</button>
        </div>
      </Link>
    )
  }
}

function mapStateToProps ({ users, questions, authedUser}, { id }) {
  return {
    questionID: questions[id].id,
    name: users[questions[id].author].name,
    avatarURL: users[questions[id].author].avatarURL,
    optionOneText: questions[id].optionOne.text
  }
}

export default withRouter(connect(mapStateToProps)(Question))
