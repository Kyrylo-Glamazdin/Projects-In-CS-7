import React, {Component} from 'react';
import DebitCard from './DebitCard.js';
import Form from './Form.js';
import Header from './Header.js';
import AccountBalance from './AccountBalance.js';
import '../Styles/Debits.css';

//the page for displaying all of the debit transactions and an option to add new debits
class Debits extends Component{
    constructor(props){
        super(props)

        //default form values
        this.state = {
            description: "",
            amount: ""
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    //update the form
    onChangeHandler(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    //processes the insertion of a new transaction
    onSubmitHandler(event){
        event.preventDefault();

        //setting up the date

        //date
        let curDate = new Date();
        let curYear = curDate.getFullYear();
        let curMonth = String(curDate.getMonth() + 1).padStart(2, '0');
        let curDay = String(curDate.getDay() + 1).padStart(2, '0');

        //time
        let curHours = String(curDate.getHours()).padStart(2, '0');
        let curMinutes = String(curDate.getMinutes()).padStart(2, '0');
        let curSeconds = String(curDate.getSeconds()).padStart(2, '0');

        //normalized date format
        let fullDate = curYear + "-" + curMonth + "-" + curDay + "T" + curHours + ":" + curMinutes + ":" + curSeconds;

        //creating new debit object to be added to other debits
        let newDebit = {
            description: this.state.description,
            amount: parseFloat(this.state.amount),
            date: fullDate
        }
        //adding credit
        this.props.addDebit(newDebit)
        //setting default state
        this.setState({
            description: "",
            amount: ""
        })
    }

    render(){
        return(
            <div>
                <Header />
                <div className="section-header">
                Debits
                </div>
                <div className = "home-balance-section">
                    <AccountBalance accountBalance={this.props.accountBalance} debitBalance={this.props.debitBalance} creditBalance={this.props.creditBalance}/>
                </div>
                <div className="transaction-section-container">
                    {this.props.debits.map(debit => (<DebitCard debit={debit}/>))}
                </div>
                <div className="section-header">
                New Debit:
                </div>
                <div className="form-section">
                    <Form description={this.state.description} amount={this.state.amount} onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler}/>
                </div>
            </div>
        );
    }
}

export default Debits;