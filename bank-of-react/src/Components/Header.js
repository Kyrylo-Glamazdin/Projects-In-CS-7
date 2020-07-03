import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Styles/Header.css'

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