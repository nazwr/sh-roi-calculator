import React from 'react';

const Savings = props => {
    let sprintSavings = 0

    Array.from(document.getElementsByClassName("sprint")).forEach(function(saving) {
       let formattedNum = saving.outerText.split("$").join("").split(",").join("")
       sprintSavings += parseInt(formattedNum)
    //    Needs to update state, not render in const
    });

    return (
        <div className="savings-column">
            <h1>Savings</h1>
            <h3>Sprint Savings: {sprintSavings}</h3>
        </div>
    )
}

export default Savings;