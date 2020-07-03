import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../Styles/General.css';

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      user: {
        userName: '',
        password: ''
      },
      redirect: false
    }
  }

  handleChange = (e) => {
    const updatedUser = {...this.state.user}
    const inputField = e.target.name
    const inputValue = e.target.value
    updatedUser[inputField] = inputValue

    this.setState({user: updatedUser})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)
    this.setState({redirect: true})
  }

  render () {
    if (this.state.redirect) {
      return (<Redirect to="/"/>)
    }

    return (
      <div className="login-container">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div className="login-title">Log In
          </div>
          <div className="login-credentials">
            <label className="standard-login-label" htmlFor="userName">User Name</label>
            <input className="standard-login-input" type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} />
          
            <label className="standard-login-label" htmlFor="password">Password</label>
            <input className="standard-login-input" type="password" name="password" />

            <input className="login-button" type="submit" value="Log In"/>
          </div>
        </form>
      </div>
    )
  }
}

export default LogIn