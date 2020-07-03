import React, {Component} from 'react';

class Form extends Component{

    render(){
        return(
            <form onSubmit={this.props.onSubmitHandler}>
                <label> Description </label>
                <input type="text" name="description" onChange={this.props.onChangeHandler} value={this.props.description}/>
                <label> Amount </label>
                <input type="number" name="amount" onChange={this.props.onChangeHandler} value={this.props.amount}/>
                <input type="submit" value="Add Transaction"/>
            </form>
        );
    }
}

export default Form;