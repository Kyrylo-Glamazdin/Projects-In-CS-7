import React, {Component} from 'react';
import '../Styles/General.css';

class AccountBalance extends Component {
  render() {
    return (
        <div>
          <div className="special-text"> Your Debit Balance: </div> 
          <div className="balance-text">{this.props.debitBalance}</div>

          <div className="special-text"> Your Credit Balance: </div> 
          <div className="balance-text">{this.props.creditBalance}</div>

          <div className="special-text-total"> Your Account Balance: </div> 
          <div className="balance-text-total">{this.props.accountBalance}</div>
        </div>
    );
  }
}

export default AccountBalance;