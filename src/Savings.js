import React from 'react';
import NumberFormat from 'react-number-format';


const Savings = props => {
    let sprintSavings = props.savingsAmounts.perSprint
    let yearSavings = props.savingsAmounts.perYear

    return (
        <div className="savings-column">
            <h1>SAVINGS</h1>
            <div className="savings-table">
                <table>
                    <tbody>
                        <tr>
                           <td>Sprint Savings</td>
                           <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={sprintSavings}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                           </td>
                        </tr>
                        <tr>
                           <td>Yearly Savings</td>
                           <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={yearSavings}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                           </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <div className="savings-calc-button" onClick={props.handleSavingsCalc}>Calculate Savings</div>
            </div>
            {/* <div>
                <h3>Based on the information about your team, we suggest looking at our {suggestedPlan} plan</h3>
            </div> */}
        </div>
    )
}

export default Savings;