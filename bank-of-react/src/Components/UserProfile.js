import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header.js';
import '../Styles/Debits.css';

class UserProfile extends Component {
  render() {
    return (
        <div>
          <Header />
          <div className="section-header">
            User Profile
          </div>

          <div>Username: {this.props.userName}</div>
          <div>Member Since: {this.props.memberSince}</div>

          <Link to="/">Home</Link>
        </div>
    );
  }
}

export default UserProfile;