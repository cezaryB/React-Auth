import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class Signup extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      passwordError: false,
      fieldsError: false
    }
  }
  handleChange(event) {
    this.setState({
      [event.target.dataset.field]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    const { email, password, confirmPassword } = this.state
    if (password !== confirmPassword) {
      return this.setState({ passwordError: true })
    }
    if (!email || !password || !confirmPassword) {
      return this.setState({ fieldsError: true })
    }
    this.setState({ passwordError: false, fieldsError: false })
  }
  renderError() {
    if (this.state.passwordError) {
      return <div className='alert alert-danger'>Passwords does not match</div>
    }
    if (this.state.fieldsError) {
      return <div className='alert alert-danger'>Fields cannot be empty</div>
    }
  }
  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <fieldset className='form-group'>
          <label>Email:</label>
          <input
            type='text'
            className='form-control'
            data-field='email'
            onChange={(event) => this.handleChange(event)}
            value={this.state.email}
          />
        </fieldset>
        <fieldset className='form-group'>
          <label>Password:</label>
          <input
            type='password'
            className='form-control'
            data-field='password'
            onChange={(event) => this.handleChange(event)}
            value={this.state.password}
          />
        </fieldset>
        <fieldset className='form-group'>
          <label>Confirm password:</label>
          <input
            type='password'
            className='form-control'
            data-field='confirmPassword'
            onChange={(event) => this.handleChange(event)}
            value={this.state.cofirmPassword}
          />
        </fieldset>
        {this.renderError()}
        <button type='submit' className='btn btn-primary'>Create</button>
      </form>
    )
  }
}

export default connect(null, actions)(Signup)
