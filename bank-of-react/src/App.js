import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';
import Home from './Components/Home.js';
import UserProfile from './Components/UserProfile.js';
import LogIn from './Components/Login.js';
import Debits from './Components/Debits.js';
import Credits from './Components/Credits.js';

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 0,
      debits: [],
      credits: [],
      debitTotal: 0,
      creditTotal: 0,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      loggedIn: false
    }

    this.loadDebits = this.loadDebits.bind(this);
    this.loadCredits = this.loadCredits.bind(this);
    this.computeTotalDebits = this.computeTotalDebits.bind(this);
    this.computeTotalCredits = this.computeTotalCredits.bind(this);
    this.addDebit = this.addDebit.bind(this);
    this.addCredit = this.addCredit.bind(this);
  }

  componentDidMount(){
    this.loadDebits();
    this.loadCredits();
  }

  loadDebits(){
    axios.get('https://moj-api.herokuapp.com/debits')
    .then(res => {
      this.setState({
        debits: res.data
      })
        this.computeTotalDebits(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  loadCredits(){
    axios.get('https://moj-api.herokuapp.com/credits')
    .then(res => {
      this.setState({
        credits: res.data
      })
      this.computeTotalCredits(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  computeTotalDebits(debits){
    let debitTotal = 0;
    for (let i = 0; i < debits.length; i++){
      debitTotal = debitTotal + parseFloat(debits[i].amount);
    }
    this.setState({
      debitTotal
    })
  }

  computeTotalCredits(credits){
    let creditTotal = 0;
    for (let i = 0; i < credits.length; i++){
      creditTotal = creditTotal + parseFloat(credits[i].amount);
    }
    this.setState({
      creditTotal
    })
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({
      loggedIn: true,
      currentUser: newUser
    })
  }

  addDebit(newDebit){
    let updatedDebits = this.state.debits
    updatedDebits.push(newDebit);
    this.computeTotalDebits(updatedDebits);
    this.setState({debits: updatedDebits});
  }

  addCredit(newCredit){
    let updatedCredits = this.state.credits
    updatedCredits.push(newCredit);
    this.computeTotalCredits(updatedCredits);
    this.setState({credits: updatedCredits});
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.creditTotal - this.state.debitTotal} debitBalance={this.state.debitTotal} creditBalance={this.state.creditTotal} loggedIn={this.state.loggedIn}/>);
    const UserProfileComponent = () => ( <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>);
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props} />)
    const DebitsComponent = () => (<Debits debits={this.state.debits} accountBalance={this.state.creditTotal - this.state.debitTotal} debitBalance={this.state.debitTotal} creditBalance={this.state.creditTotal} addDebit={this.addDebit}/>)
    const CreditsComponent = () => (<Credits credits={this.state.credits} accountBalance={this.state.creditTotal - this.state.debitTotal} debitBalance={this.state.debitTotal} creditBalance={this.state.creditTotal} addCredit={this.addCredit}/>)

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/debits" render={DebitsComponent}/>
            <Route exact path="/credits" render={CreditsComponent}/>
          </div>
        </Router>
    );
  }

}

export default App;