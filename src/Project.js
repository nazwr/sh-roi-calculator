import React from 'react';

const Project = props => {
    // let organizationConfig = props.organizationConfig

    return (
        <div className="project-column">
            <h1>PROJECT</h1>
            <div className="salary-table">
                <table>
                    <tbody>
                        <tr>
                            <th>Role</th>
                            <th>Yearly Salary</th>
                        </tr>
                        <tr>
                           <td>Architect</td>
                           <td>$
                                
                           </td>
                        </tr>
                        <tr>
                           <td>Developer</td>
                           <td>$
                                
                            </td>
                        </tr>
                        <tr>
                           <td>Tester</td>
                           <td>$
                                
                            </td>
                        </tr>
                        <tr>
                           <td>Technical Writer</td>
                           <td>$
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Project;