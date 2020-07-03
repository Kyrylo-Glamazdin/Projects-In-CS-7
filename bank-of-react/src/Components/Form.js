import React, {Component} from 'react';
import '../Styles/Debits.css';

//the form used in the debit and credit pages to enter new debit/credit info.
//includes such fields as the amount and the description of a new transaction
class Form extends Component{

    render(){
        return(
            <form className="transaction-form" onSubmit={this.props.onSubmitHandler}>
                <label className="standard-label"> Description </label>
                <input className="standard-input" type="text" name="description" onChange={this.props.onChangeHandler} value={this.props.description}/>
                <label className="standard-label"> Amount </label>
                <input className="standard-input" type="number" name="amount" onChange={this.props.onChangeHandler} value={this.props.amount}/>
                <input className="submit-button" type="submit" value="Add Transaction"/>
            </form>
        );
    }
}

export default Form;