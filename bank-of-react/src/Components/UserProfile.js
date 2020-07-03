import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header.js';
import '../Styles/Debits.css';
import '../Styles/Profile.css';

//user profile component which displays user's username and membership date
class UserProfile extends Component {
  render() {
    return (
        <div>
          <Header />
          <div className="section-header">
            User Profile
          </div>

          <div className="profile-info-container">
            <div className="profile-info">
            <div className="user-profile-user-specs">Username: {this.props.userName}</div>

            <div className="user-profile-member-specs">Member Since: {this.props.memberSince}</div>

            <div className="user-profile-button-container">
              <Link className="user-profile-link" to="/">
                <button className="user-profile-home-button">
                  Home 
                </button>
              </Link> 
            </div>
          </div>
          </div>

        </div>
    );
  }
}

export default UserProfile;