import React, { Component } from 'react'
import { connect } from 'react-redux'

export default ComposedComponent => {
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.auth.authenticated) {
        this.context.router.push('/')
      }
    }
    componentWillReceiveProps(nextProps) {
      if (!nextProps.auth.authenticated) {
        this.context.router.push('/')
      }
    }
    render() {
      return (
        <ComposedComponent { ...this.props } />
      )
    }
  }

  Authenticate.contextTypes = {
    router: React.PropTypes.object
  }

  const mapStateToProps = state => {
    return {
      auth: state.auth
    }
  }

  return connect(mapStateToProps)(Authenticate)
}
