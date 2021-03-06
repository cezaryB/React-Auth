import axios from 'axios'
import { browserHistory } from 'react-router'
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  SECRET_FETCHED
} from './types'

const ROOT_URL = 'http://localhost:3090'


export function signinUser({ email, password }) {
  return dispatch => {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // If request is good
          // Update state to indicate user is authenticated
          dispatch({ type: AUTH_USER })
          // Save the JWT Token
          localStorage.setItem('token', response.data.token)
          // Redirect to the route '/feature'
          browserHistory.push('/feature')
      })
      .catch(() => {
        dispatch(authError('Bad login info'))
        // If request is bad...
        // - Show an error to the user
      })
  }
}

export function signupUser({ email, password }) {
  return dispatch => {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER })
        localStorage.setItem('token', response.data.token)
        browserHistory.push('/feature')
      })
      .catch(() => {
        dispatch(authError('User already exists'))
      })
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser() {
  localStorage.removeItem('token')
  return { type: UNAUTH_USER }
}

export function fetchMessage() {
  return dispatch => {
    const token = localStorage.getItem('token')
    axios.get(ROOT_URL, {
      headers: { authorization: token }
    })
      .then(response => {
        dispatch({ type: SECRET_FETCHED, payload: response.data.message })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
