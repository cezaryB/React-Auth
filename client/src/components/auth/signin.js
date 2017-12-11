import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Signin extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  handleFormSubmit(event) {
    event.preventDefault()
    const { email, password } = this.state
    console.log(email, password)
    this.props.signinUser({ email, password })
    // here we need something to log user in
  }
  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }
  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }
  renderErrorMessage() {
    if (this.props.auth.authError) {
      return <div className='alert alert-danger'>{this.props.auth.authError}</div>
    }
  }
  render() {
    const { handleSubmit, fields: { email, password }} = this.props
    return (
      <form onSubmit={(event) => this.handleFormSubmit(event)}>
        <fieldset className='form-group'>
          <label>Email:</label>
          <input onChange={(event) => this.handleEmailChange(event)} { ...email } value={this.state.email} className='form-control' />
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input onChange={(event) => this.handlePasswordChange(event)} { ...password } value={this.state.password} type='password' className='form-control' />
        </fieldset>
        {this.renderErrorMessage()}
        <button action='submit' clasName='btn btn-primary'>Sign in</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

Signin = connect(mapStateToProps, actions)(Signin)

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin)
