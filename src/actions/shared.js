import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
//import { setAuthedUser } from '../actions/authedUser'
//Took this off because I don't
//need to use it. 

export function handleInitialData (){
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions}) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
      })
  }
}
