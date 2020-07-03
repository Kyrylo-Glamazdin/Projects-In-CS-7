import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Header.css'

//the standard header/navbar that is used throughout the app

// 'Bank of React' redirects to the home page
// 'Credits' redirects to the credit pages
// 'Debits' redirects to the debit page
// 'User Profile' redirects to the profile of the user

class Header extends Component{
    render(){
        return(
            <div className="nav-bar-general">
                <Link className="left-button" to="/">Bank Of React</Link>
                <div className="right-buttons">
                    <Link className="debit-credit-section" to="/credits">Credits</Link>
                    <Link className="debit-credit-section" to="/debits">Debits</Link>
                    <Link className="debit-credit-section" to="/userProfile">Profile Page</Link>
                </div>
            </div>
        );
    }
}

export default Header;