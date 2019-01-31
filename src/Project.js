import React from 'react';
import Number from './Number.js'

const Project = props => {
    let salaryData = props.orgSalaries
    let countData = props.orgCount
    let timeData = props.orgTime
    let projectTableData = props.calculatorData.roles
    let projectOutput = []

    function sprintCostCalc(role, task) {
        return (((salaryData[role] * countData[role])*((timeData[role][task])/100))/26).toFixed(0)
    }

    function sprintSavingsCalc(role, task, percent) {
        return ((((salaryData[role] * countData[role]) * ((timeData[role][task])/100)) * percent) / 26).toFixed(0)
    }

    function yearSavingsCalc(role, task, percent) {
        return (((salaryData[role] * countData[role])*((timeData[role][task])/100)) * percent).toFixed(0)
    }

    for (let i = 0; i < projectTableData.length; i++) {
        let currentObj = projectTableData[i]
        let roleTitle = <tr className="header-row"><td colSpan="7"><b>{currentObj.displayName + "s"}</b></td></tr>

        projectOutput.push(roleTitle)

        for (let n = 0; n < currentObj.jobs.length; n++) {
            let jobRow = 
                <tr key={"jr-" + i + "_" + n}>
                    <td className="task-desc">{currentObj.jobs[n].description}</td>
                    
                    <td>
                        <Number 
                            type="input"
                            symbol="%"
                            lookupName={currentObj.lookupName + "_" + n}
                            onChange={props.handleTimeChange}
                            defaultValue={currentObj.jobs[n].defaultTime}
                        />
                    </td>
                    <td>
                        <Number
                            value={sprintCostCalc(currentObj.lookupName, n)}
                            symbol={'$'}
                        />
                    </td>
                    <td className="with-swaggerhub">
                        <Number 
                            value={currentObj.jobs[n].timeReductionPercent}
                            symbol="%"
                        />
                    </td>
                    <td className="with-swaggerhub sprint">
                        <Number 
                            value={sprintSavingsCalc(currentObj.lookupName, n, "." + currentObj.jobs[n].timeReductionPercent)}
                            symbol="$"
                        />
                    </td>
                    <td className="with-swaggerhub year">
                        <Number 
                            value={yearSavingsCalc(currentObj.lookupName, n, "." + currentObj.jobs[n].timeReductionPercent)}
                            symbol="$"
                        />
                    </td>
                    <td className="more-info-icon"><a target="_blank" href={currentObj.jobs[n].infoLink} rel="noopener noreferrer"><i class="far fa-question-circle"></i></a></td>
                </tr>

            projectOutput.push(jobRow)
        }

        
    }

    return (
        <div className="project-column">
            <h1>PROJECT</h1>
            <div className="project-table">
                <table>
                    <tbody>
                        <tr>
                            <th className="task-column"></th>
                            <th colSpan="2">Present</th>
                            <th colSpan="4" className="with-swaggerhub full-block">With Swaggerhub</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="sub-head">% Time / Sprint</td>
                            <td className="sub-head">Sprint Cost</td>
                            <td className="with-swaggerhub sub-head">% Time Reduction</td>
                            <td className="with-swaggerhub sub-head">Sprint Savings</td>
                            <td className="with-swaggerhub sub-head">Yearly Savings</td>
                            <td className="with-swaggerhub sub-head">Info</td>
                        </tr>
                        {projectOutput}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Project;