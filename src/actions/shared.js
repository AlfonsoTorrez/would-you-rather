import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'
import { setAuthedUser } from '../actions/authedUser'
//Took this off because I don't
//need to use it.
const AUTHED_ID = 'none'

export function handleInitialData (){
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}
