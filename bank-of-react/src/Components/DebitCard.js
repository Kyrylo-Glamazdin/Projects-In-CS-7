import React from 'react';

function DebitCard(props){
    return (
        <div>
            {props.debit.amount}
            {props.debit.description}
            {props.debit.date}
        </div>
    );
}

export default DebitCard;