import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {

  componentDidMount() {
    if(this.props.logged === true){
      this.props.history.push(`/`)
    }
  }

  render(){
    return(
      <div className="center">
        <div>
          <h1>New Question</h1>
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

export default connect(mapStateToProps)(NewQuestion)
