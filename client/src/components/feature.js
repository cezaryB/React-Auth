import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Feature extends Component {
  componentDidMount() {
    this.props.fetchMessage()
  }
  renderMessage() {
    if (this.props.auth.secretMessage) {
      return <div>{this.props.auth.secretMessage}</div>
    }
  }
  render() {
    return (
      <div>
        {this.renderMessage()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(null, actions)(Feature)
