import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class UnAnswered extends Component {
  render(){
    return(
      <div>
        <ul>
          {this.props.questionIds.map((id) => (
            <li key={id}>
              <Question id={id}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
//Sort for unanswered questions!
function mapStateToProps ({ questions }){
  return{
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect()(UnAnswered)
