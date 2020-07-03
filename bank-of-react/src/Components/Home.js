import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import Header from './Header.js'
import '../Styles/General.css';

class Home extends Component {
  render() {
    return (
        <div>
          <Header />
          <div className = "home-balance-section">
          <AccountBalance accountBalance={this.props.accountBalance}/>
          </div>
        </div>
    );
  }
}

export default Home;