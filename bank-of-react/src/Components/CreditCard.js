import React from 'react';
import '../Styles/Debits.css';

//component for each individual credit transaction
function CreditCard(props){
    //separate the date into date and time to display separately
    let fullDate = String(props.credit.date);
    let tIndex = 0;
    for (let i = 0; i < fullDate.length; i++){
        if (fullDate[i] === "T"){
            tIndex = i;
            break;
        }
    }

    let transactionDate = fullDate.substring(0, tIndex); //date
    let transactionTime = fullDate.substring(tIndex+1, fullDate.length); //time

    return (
        <div className="card-container">
            <div className="description-card-section">
                {props.credit.description}
            </div>
            <div className = "transaction-props-section">
                <div className="amount">
                    Amount: ${props.credit.amount}
                </div>
                <div className="date">
                    Date: {transactionDate}
                </div>
                <div className="time">
                    Time: {transactionTime}
                </div>
            </div>
        </div>
    );
}

export default CreditCard;