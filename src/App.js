import React, { Component } from 'react';
import logo from './SWH_Logo_CLR_WT.svg';
import './App.css';
import Organization from './Organization.js';
import Project from './Project.js';
import Savings from './Savings.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        orgSalaries: {
            arch: 105000,
            dev: 95000,
            test: 75000,
            writer: 65000
          },
        orgCount: {
          arch: 5,
          dev: 10,
          test: 5,
          writer: 1
        }
      }
    this.handleCountChange = this.handleCountChange.bind(this)
    this.handleSalaryChange = this.handleSalaryChange.bind(this)
  }

  handleCountChange(event) {
    let updateState = this.state

    updateState["orgCount"][event.target.name] = parseInt(event.target.value)
    this.setState(updateState)
  }

  handleSalaryChange(event) {
    let updateState = this.state
    
    updateState["orgSalaries"][event.target.name] = parseInt(event.target.value)
    this.setState(updateState)
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header-container">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="header-container title">
            <h1>ROI<br />Calculator</h1>
          </div>
          <div className="header-container description">
            <p>
              This is an estimated ROI calculator that can inform teams on their potential savings when switching to the SwaggerHub platform. These numbers are based on data found across our platforms user base and various analyst reports.
            </p>
          </div>
        </header>
        <div className="App-body">
          <div className="config-column">
            <Organization 
              orgSalaries = {this.state.orgSalaries}
              orgCount = {this.state.orgCount}
              handleCountChange = {this.handleCountChange}
              handleSalaryChange = {this.handleSalaryChange}
            />
          </div>
          <div className="config-column">
            <Project />
          </div>
          <div className="savings-column">
            <Savings />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
