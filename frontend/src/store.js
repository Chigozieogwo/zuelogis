import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  trackListReducer,
  trackDetailsReducer,
  trackDeleteReducer,
  trackUpdateReducer,
  trackCreateReducer,
  trackNumberDetailsReducer,
  trackHistoryReducer
} from './reducers/trackReducers.js'
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
} from './reducers/userReducers'

const reducer = combineReducers({
  trackCreate: trackCreateReducer,
  trackList: trackListReducer,
  trackDetails: trackDetailsReducer,
  trackNumberDetails: trackNumberDetailsReducer,
  trackDelete: trackDeleteReducer,
  trackUpdate: trackUpdateReducer,
  trackHistory:trackHistoryReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer
})


const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null





const initialState = {
  userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
