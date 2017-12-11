import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR
} from '../actions/types'

const INITIAL_STATE = {
  authenticated: false,
  authError: ''
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true }
    case UNAUTH_USER:
      return { ...state, authenticated: false }
    case AUTH_ERROR:
      return { ...state, authError: action.payload }
    default:
      return state
  }
}
