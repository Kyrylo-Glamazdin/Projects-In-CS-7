import React, {Component} from 'react';
import '../Styles/General.css';

class AccountBalance extends Component {
  render() {
    return (
        <div>
          <div className="special-text"> Your Account Balance: </div> 
          <div className="balance-text">{this.props.accountBalance}</div>
        </div>
    );
  }
}

export default AccountBalance;