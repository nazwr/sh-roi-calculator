import React from 'react';
import Number from './Number.js'

const Organization = props => {
    let salaryData = props.orgSalaries
    let countData = props.orgCount

    let roleTableData = props.calculatorData.roles

    let salaryOutput = []
    let countOutput = []
    let totalCount = 0
    let totalYear = 0

    for (let i = 0; i < roleTableData.length; i++) {
        let currentObj = roleTableData[i]
        let salaryRow = 
            <tr key={"sr-" + i}>
                <td>{currentObj.displayName}</td>
                <td>
                    <Number 
                        type="input"
                        symbol="$"
                        lookupName={currentObj.lookupName}
                        onChange={props.handleSalaryChange}
                        defaultValue={salaryData[currentObj.lookupName]}
                    />
                </td>
            </tr>

        let countRow = 
            <tr key={"cr-" + i}>
                <td>{currentObj.displayName}</td>
                <td>
                    <Number 
                        type="input"
                        lookupName={currentObj.lookupName}
                        onChange={props.handleCountChange}
                        defaultValue={countData[currentObj.lookupName]}
                    />
                </td>
                <td>
                    <Number 
                        value={((salaryData[currentObj.lookupName] * countData[currentObj.lookupName])/26).toFixed(0)}
                        symbol="$"
                    />
                </td>
                <td>
                    <Number 
                        value={((salaryData[currentObj.lookupName] * countData[currentObj.lookupName])).toFixed(0)}
                        symbol="$"
                    />
                </td>
            </tr>

        salaryOutput.push(salaryRow)
        countOutput.push(countRow)
    }

    for (let n = 0; n < roleTableData.length; n++) {
        let currentCount = countData[roleTableData[n].lookupName]
        let currentSalary = (salaryData[roleTableData[n].lookupName] * currentCount)
        
        totalCount += currentCount
        totalYear += currentSalary
    }

    return (
        <div className="org-column">
            <h1>ORGANIZATION</h1>
            <div className="salary-table">
                <table>
                    <tbody>
                        <tr>
                            <th>Role</th>
                            <th>Yearly Salary</th>
                        </tr>
                        {salaryOutput}
                    </tbody>
                </table>
            </div>
            <div className="role-table">
                <table>
                    <tbody>
                        <tr>
                            <th>Role</th>
                            <th>#</th>
                            <th>Spend / Sprint</th>
                            <th>Yearly Spend</th>
                        </tr>
                        {countOutput}
                        <tr className="total-row">
                            <td>Total</td>
                            <td>
                                <Number
                                    value={totalCount} 
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                />
                            </td>
                            <td>
                                <Number 
                                    value={(totalYear/52).toFixed(0)} 
                                    displayType={"text"} 
                                    thousandSeparator={true} 
                                    symbol={'$'} 
                                />
                            </td>
                            <td>
                                <Number
                                    value={(totalYear)} 
                                    displayType={"text"} 
                                    thousandSeparator={true} 
                                    symbol={'$'} 
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Organization;