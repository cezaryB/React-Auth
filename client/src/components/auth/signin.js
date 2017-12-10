import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    console.log(this.props)
    // this.props.signinUser({ email, password })
    // here we need something to log user in
  }
  render() {
    const { handleSubmit, fields: { email, password }} = this.props
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className='form-group'>
          <label>Email:</label>
          <input { ...email } className='form-control' />
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input { ...password } type='password' className='form-control' />
        </fieldset>
        <button action='submit' clasName='btn btn-primary'>Sign in</button>
      </form>
    )
  }
}


Signin = connect(null, actions)(Signin)

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin)
