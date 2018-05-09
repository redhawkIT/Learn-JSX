import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { responsiveStateReducer as screen } from 'redux-responsive'

const rootReducer = combineReducers({
  screen,
  routing
  // YOUR REDUCERS HERE
})

export default rootReducer
