import React from 'react';
import '../Styles/Debits.css';

function DebitCard(props){
    let fullDate = String(props.debit.date);
    let tIndex = 0;
    for (let i = 0; i < fullDate.length; i++){
        if (fullDate[i] === "T"){
            tIndex = i;
            break;
        }
    }

    let transactionDate = fullDate.substring(0, tIndex);
    let transactionTime = fullDate.substring(tIndex+1, fullDate.length);

    return (
        <div className="card-container">
            <div className="description-card-section">
                {props.debit.description}
            </div>
            <div className = "transaction-props-section">
                <div className="amount">
                    Amount: ${props.debit.amount}
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

export default DebitCard;