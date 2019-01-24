import React from 'react';
import NumberFormat from 'react-number-format';

const Project = props => {
    let salaryData = props.orgSalaries
    let countData = props.orgCount
    let timeData = props.orgTime

    function sprintCostCalc(role, task) {
        return (((salaryData[role] * countData[role])*((timeData[role][task])/100))/26).toFixed(0)
    }

    function sprintSavingsCalc(role, task, percent) {
        return ((((salaryData[role] * countData[role]) * ((timeData[role][task])/100)) * percent) / 26).toFixed(0)
    }

    function yearSavingsCalc(role, task, percent) {
        return (((salaryData[role] * countData[role])*((timeData[role][task])/100)) * percent).toFixed(0)
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
                            <th colSpan="3" className="with-swaggerhub">With Swaggerhub</th>
                        </tr>
                        <tr>
                            <td></td>
                            <td className="sub-head">% Time / Sprint</td>
                            <td className="sub-head">Sprint Cost</td>
                            <td className="with-swaggerhub sub-head">% Time Reduction</td>
                            <td className="with-swaggerhub sub-head">Sprint Savings</td>
                            <td className="with-swaggerhub sub-head">Yearly Savings</td>
                        </tr>
    {/* ARCHITECTURE SET */}
                        <tr className="header-row">
                           <td colSpan="6"><b>Architects</b></td>
                        </tr>
    {/* task_0 */}
                        <tr>
                            <td className="task-desc">Designing new APIs and versions </td>
                            <td>
                                <NumberFormat 
                                    name="arch_0"
                                    isNumericString={true}
                                    suffix={'%'}
                                    onChange={props.handleTimeChange} 
                                    defaultValue={timeData.arch[0]} 
                                />  
                            </td>
                            <td>
                                <NumberFormat 
                                    value={sprintCostCalc('arch', 0)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">25%</td>
                            <td className="with-swaggerhub sprint">
                                <NumberFormat 
                                    value={sprintSavingsCalc('arch', 0, .25)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={yearSavingsCalc('arch', 0, .25)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                        </tr>
    {/* task_1 */}
                        <tr>
                            <td className="task-desc">Ensuring a design conforms to company standards</td>
                            <td>
                                <NumberFormat 
                                    name="arch_1"
                                    isNumericString={true}
                                    suffix={'%'}
                                    onChange={props.handleTimeChange} 
                                    defaultValue={timeData.arch[1]} 
                                />
                            </td>
                            <td>
                                <NumberFormat 
                                    value={sprintCostCalc('arch', 1)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">50%</td>
                            <td className="with-swaggerhub sprint">
                                <NumberFormat 
                                    value={sprintSavingsCalc('arch', 1, .5)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={yearSavingsCalc('arch', 1, .5)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                        </tr>
    {/* task_3 */}
                        <tr>
                            <td className="task-desc">Getting feedback on whether the design of an API will be problematic</td>
                            <td>
                                <NumberFormat 
                                    name="arch_2"
                                    isNumericString={true}
                                    suffix={'%'}
                                    onChange={props.handleTimeChange} 
                                    defaultValue={timeData.arch[2]} 
                                />
                            </td>
                            <td>
                                <NumberFormat 
                                    value={sprintCostCalc('arch', 2)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">30%</td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={sprintSavingsCalc('arch', 2, .3)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={yearSavingsCalc('arch', 2, .3)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                        </tr>
    {/* DEVELOPER SET */}
                        <tr className="header-row">
                           <td colSpan="6"><b>Developers</b></td>
                        </tr>
    {/* task_0 */}
                        <tr>
                            <td className="task-desc">Reaching an agreement on a proposed API change</td>
                            <td>
                                <NumberFormat 
                                    name="dev_0"
                                    isNumericString={true}
                                    suffix={'%'}
                                    onChange={props.handleTimeChange} 
                                    defaultValue={timeData.dev[0]} 
                                />  
                            </td>
                            <td>
                                <NumberFormat 
                                    value={sprintCostCalc('dev', 0)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">25%</td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={sprintSavingsCalc('dev', 0, .25)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={yearSavingsCalc('dev', 0, .25)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                        </tr>
    {/* task_1 */}
                        <tr>
                            <td className="task-desc">Developing SDKs for client integrations</td>
                            <td>
                                <NumberFormat 
                                    name="dev_1"
                                    isNumericString={true}
                                    suffix={'%'}
                                    onChange={props.handleTimeChange} 
                                    defaultValue={timeData.dev[1]} 
                                />
                            </td>
                            <td>
                                <NumberFormat 
                                    value={sprintCostCalc('dev', 1)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">80%</td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={sprintSavingsCalc('dev', 1, .8)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={yearSavingsCalc('dev', 1, .8)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                        </tr>
    {/* task_3 */}
                        <tr>
                            <td className="task-desc">Configuring development environments for new APIs or changes</td>
                            <td>
                                <NumberFormat 
                                    name="dev_2"
                                    isNumericString={true}
                                    suffix={'%'}
                                    onChange={props.handleTimeChange} 
                                    defaultValue={timeData.dev[2]} 
                                />
                            </td>
                            <td>
                                <NumberFormat 
                                    value={sprintCostCalc('dev', 2)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">60%</td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={sprintSavingsCalc('dev', 2, .6)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={yearSavingsCalc('dev', 2, .6)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                        </tr>
    {/* TESTER SET */}
                            <tr className="header-row">
                           <td colSpan="6"><b>Testers</b></td>
                        </tr>
    {/* task_0 */}
                        <tr>
                            <td className="task-desc">Getting requirements for upcoming changes to an API</td>
                            <td>
                                <NumberFormat 
                                    name="test_0"
                                    isNumericString={true}
                                    suffix={'%'}
                                    onChange={props.handleTimeChange} 
                                    defaultValue={timeData.test[0]} 
                                />  
                            </td>
                            <td>
                                <NumberFormat 
                                    value={sprintCostCalc('test', 0)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">60%</td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={sprintSavingsCalc('test', 0, .6)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={yearSavingsCalc('test', 0, .6)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                        </tr>
    {/* task_1 */}
                        <tr>
                            <td className="task-desc">Waiting for a test environment to be shared</td>
                            <td>
                                <NumberFormat 
                                    name="test_1"
                                    isNumericString={true}
                                    suffix={'%'}
                                    onChange={props.handleTimeChange} 
                                    defaultValue={timeData.test[1]} 
                                />
                            </td>
                            <td>
                                <NumberFormat 
                                    value={sprintCostCalc('test', 1)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">75%</td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={sprintSavingsCalc('test', 1, .75)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={yearSavingsCalc('test', 1, .75)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                        </tr>
    {/* task_3 */}
                        <tr>
                            <td className="task-desc">Updating previous tests as requirements change</td>
                            <td>
                                <NumberFormat 
                                    name="test_2"
                                    isNumericString={true}
                                    suffix={'%'}
                                    onChange={props.handleTimeChange} 
                                    defaultValue={timeData.test[2]} 
                                />
                            </td>
                            <td>
                                <NumberFormat 
                                    value={sprintCostCalc('test', 2)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">15%</td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={sprintSavingsCalc('test', 2, .15)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={yearSavingsCalc('test', 2, .15)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                        </tr>
    {/* WRITER SET */}
                        <tr className="header-row">
                           <td colSpan="6"><b>Techincal Writers</b></td>
                        </tr>
    {/* task_0 */}
                        <tr>
                            <td className="task-desc">Creating documentation to match new APIs and versions</td>
                            <td>
                                <NumberFormat 
                                    name="writer_0"
                                    isNumericString={true}
                                    suffix={'%'}
                                    onChange={props.handleTimeChange} 
                                    defaultValue={timeData.writer[0]} 
                                />  
                            </td>
                            <td>
                                <NumberFormat 
                                    value={sprintCostCalc('writer', 0)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">80%</td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={sprintSavingsCalc('writer', 0, .8)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={yearSavingsCalc('writer', 0, .8)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                        </tr>
    {/* task_1 */}
                        <tr>
                            <td className="task-desc">Validating previous documentation matches upcoming changes</td>
                            <td>
                                <NumberFormat 
                                    name="writer_1"
                                    isNumericString={true}
                                    suffix={'%'}
                                    onChange={props.handleTimeChange} 
                                    defaultValue={timeData.writer[1]} 
                                />
                            </td>
                            <td>
                                <NumberFormat 
                                    value={sprintCostCalc('writer', 1)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">40%</td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={sprintSavingsCalc('writer', 1, .4)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={yearSavingsCalc('writer', 1, .4)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                        </tr>
    {/* task_3 */}
                        <tr>
                            <td className="task-desc">Making sure documentation is published and shared when a new version goes to production</td>
                            <td>
                                <NumberFormat 
                                    name="writer_2"
                                    isNumericString={true}
                                    suffix={'%'}
                                    onChange={props.handleTimeChange} 
                                    defaultValue={timeData.writer[2]} 
                                />
                            </td>
                            <td>
                                <NumberFormat 
                                    value={sprintCostCalc('writer', 2)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">50%</td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={sprintSavingsCalc('writer', 2, .5)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                            <td className="with-swaggerhub">
                                <NumberFormat 
                                    value={yearSavingsCalc('writer', 2, .5)}  
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Project;