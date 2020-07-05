import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render(){
    return(
      <span>
        <img src={this.props.myUsers[this.props.question.author].avatarURL} alt={this.props.question.author} width="100" height="100"/>
        <p>{this.props.question.author}</p>
      </span>
    )
  }
}

function mapStateToProps ({ users, questions}, { id }) {
  const question = questions[id]
  console.log(question)
  return {
    question,
    myUsers: users
  }
}

export default connect(mapStateToProps)(Question)
