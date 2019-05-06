import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import aboutEventReducer from './aboutEventReducer'

const rootReducer = combineReducers({
  aboutEvent: aboutEventReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer