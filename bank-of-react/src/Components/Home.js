import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Redirect} from 'react-router'
import Header from './Header.js'
import '../Styles/General.css';

//home component where user can view their balances and select ofther pages to go to.
//login component redirects here
class Home extends Component {
  render() {

    //redirect to log in if not logged in yet
    if (!this.props.loggedIn){
      return(
        <Redirect to="/login/"/>
      )
    }

    return (
        <div>
          <Header />
          <div className = "home-balance-section">
          <AccountBalance accountBalance={this.props.accountBalance} debitBalance={this.props.debitBalance} creditBalance={this.props.creditBalance}/>
          </div>
        </div>
    );
  }
}

export default Home;