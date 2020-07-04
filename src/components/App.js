import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Nav from './Nav'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render(){
    return (
      <Router>
        <Fragment>
          <LoadingBar/>
          <div>
            <Nav/>
            {this.props.myUser === true
              ? null
              : <div>
                  <Route path='/' exact component={Home} />
                  <Route path='/new' exact component={NewQuestion} />
                  <Route path='/leader' exact component={LeaderBoard} />
                </div>}
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    myUser: authedUser === null
  }
}
export default connect(mapStateToProps)(App);
