import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render(){
    return(
      <div>
        <p>{this.props.question.author}</p>
      </div>
    )
  }
}

function mapStateToProps ({questions}, { id }) {
  const question = questions[id]
  console.log(question)
  return {
    question
  }
}

export default connect(mapStateToProps)(Question)
