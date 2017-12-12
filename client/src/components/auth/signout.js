import React, { Component } from 'react'
import { connect } from 'react-redux'


class Signout extends Component {
  componentWillMount() {
    this.props.signoutUser()
  }
  render() {
    return (
      <div>Sorry to see you go</div>
    )
  }
}

export default connect(null, null)(Signout)
