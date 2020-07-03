import React, {Component} from 'react';
import DebitCard from './DebitCard.js';
import Form from './Form.js';

class Debits extends Component{
    constructor(props){
        super(props)

        this.state = {
            description: "",
            amount: ""
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitHandler(event){
        event.preventDefault();

        //setting up the date
        let curDate = new Date();
        let curYear = curDate.getFullYear();
        let curMonth = String(curDate.getMonth() + 1).padStart(2, '0');
        let curDay = String(curDate.getDay() + 1).padStart(2, '0');
        let curHours = String(curDate.getHours()).padStart(2, '0');
        let curMinutes = String(curDate.getMinutes()).padStart(2, '0');
        let curSeconds = String(curDate.getSeconds()).padStart(2, '0');

        let fullDate = curYear + "-" + curMonth + "-" + curDay + "-" + "T" + curHours + ":" + curMinutes + ":" + curSeconds;


        let newDebit = {
            description: this.state.description,
            amount: parseFloat(this.state.amount),
            date: fullDate
        }
        this.props.addDebit(newDebit)
        this.setState({
            description: "",
            amount: ""
        })
    }

    render(){
        return(
            <div>
                <div>
                Debits
                </div>
                <div>
                    Account Balance: {this.props.accountBalance}
                </div>
                <div>
                    {this.props.debits.map(debit => (<DebitCard debit={debit}/>))}
                </div>
                <Form description={this.state.description} amount={this.state.amount} onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler}/>
            </div>
        );
    }
}

export default Debits;