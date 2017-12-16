import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  SECRET_FETCHED
} from '../actions/types'

const INITIAL_STATE = {
  authenticated: false,
  authError: '',
  secretMessage: ''
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true, authError: '' }
    case UNAUTH_USER:
      return { ...state, authenticated: false, authError: '' }
    case AUTH_ERROR:
      return { ...state, authError: action.payload }
    case SECRET_FETCHED:
      return { ...state, secretMessage: action.payload }
    default:
      return state
  }
}
