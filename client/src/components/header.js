import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Header extends Component {
  renderLinks() {
    if (this.props.auth.authenticated) {
      return (
        <li className='nav-item'>
          <Link to='/signout' className='nav-link'>Sign out</Link>
        </li>
      )
    }
    return (
      <fragment>
        <li className='nav-item'><Link to='/signin' className='nav-link'>Sign in</Link></li>
        <li className='nav-item'><Link to='/signup' className='nav-link'>Sign up</Link></li>
      </fragment>
    )
  }
  render() {
    return (
      <nav className='navbar navbar-light'>
        <Link to='/' className='navbar-brand'>Redux Auth</Link>
        <ul className='nav navbar-nav'>
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Header)
