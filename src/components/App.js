import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Home from './Home'
import Nav from './Nav'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    return (
      <Router>
        <div>
          {this.props.test === true
            ? <Login/>
            : <Home/>
          }
        </div>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    test: authedUser === null
  }
}
export default connect(mapStateToProps)(App);
