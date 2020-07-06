import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionPage extends Component {

  componentDidMount() {
    if(this.props.logged === true){
      this.props.history.push(`/`)
    }
  }

  render() {
    return (
      <div className="center">
      <div className="card">
        <div className="content">
          <h3><b>{this.props.name} asks:</b></h3>
        </div>
          <img className="avatar" src={this.props.avatarURL} alt={this.props.name} width="100" height="100"/>
          <h2><b>Would You Rather?</b></h2>
          <div>
            <form>
              <input type="radio"/>
              <label>{this.props.optionOneText}</label><br/>
              <input type="radio"/>
              <label>{this.props.optionTwoText}</label><br/>
            </form>
            <br/>
            <button className="btn">Submit</button>
          </div>
      </div>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, users, questions }, props) {
  //Pass through information
  const { id } = props.match.params
  return {
    logged: authedUser === 'none',
    questionID: questions[id].id,
    name: users[questions[id].author].name,
    avatarURL: users[questions[id].author].avatarURL,
    optionOneText: questions[id].optionOne.text,
    optionTwoText: questions[id].optionTwo.text
  }
}
// <img className="avatar" src={this.props.myUsers[this.props.userID].avatarURL} alt={this.props.name} width="100" height="100"/>
// <h4><b>Would You Rather?</b></h4>
// <p>{this.props.question.optionOne.text} or ....</p>
// <button className="btn">View Poll</button>

export default connect(mapStateToProps)(QuestionPage)
