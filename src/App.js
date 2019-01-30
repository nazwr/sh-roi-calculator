import React, { Component } from 'react';
import logo from './SWH_Logo_CLR_WT.svg';
import './App.css';
import Organization from './Organization.js';
import Project from './Project.js';
import Savings from './Savings.js';
import CalculatorData from './calculator_data.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        orgSalaries: {},
        orgCount: {},
        orgTime: {},
        savingsAmounts: {
          perSprint: 0,
          perYear: 0
        }
      }
    this.handleCountChange = this.handleCountChange.bind(this)
    this.handleSalaryChange = this.handleSalaryChange.bind(this)
    this.handleTimeChange = this.handleTimeChange.bind(this)
    this.handleSavingsCalc  = this.handleSavingsCalc.bind(this)
  }

  componentWillMount() {
    let defaultState = this.state

    for (let i = 0; i < CalculatorData.roles.length; i++) {
      let currentObject = CalculatorData.roles[i]
      
      defaultState.orgCount[currentObject.lookupName] = currentObject.defaultCount
      defaultState.orgSalaries[currentObject.lookupName] = currentObject.defaultSalary
      defaultState.orgTime[currentObject.lookupName] = []
      
      for (let n = 0; n < currentObject.jobs.length; n++) {
        defaultState.orgTime[currentObject.lookupName].push(currentObject.jobs[n].defaultTime)
      }
    }

    this.setState(defaultState)
  }

  handleSavingsCalc(event) {
    let updateState = this.state
    let sprintSavings = 0;
    let yearSavings = 0;

    Array.from(document.getElementsByClassName("sprint")).forEach(function(saving) {
      let formattedNum = saving.outerText.split("$").join("").split(",").join("")

      sprintSavings += parseInt(formattedNum)
    });

    Array.from(document.getElementsByClassName("year")).forEach(function(saving) {
      let formattedNum = saving.outerText.split("$").join("").split(",").join("")

      yearSavings += parseInt(formattedNum)
    });

    updateState["savingsAmounts"]["perSprint"] = sprintSavings
    updateState["savingsAmounts"]["perYear"] = yearSavings

    this.setState(updateState);
  }

  handleCountChange(event) {
    let updateState = this.state

    updateState["orgCount"][event.target.name] = parseInt(event.target.value)

    this.setState(updateState)
  }

  handleSalaryChange(event) {
    let updateState = this.state
    let incomingValue = event.target.value

    if (incomingValue !== "") {
      incomingValue = incomingValue.split('$')[1].split(',').join('')
      updateState["orgSalaries"][event.target.name] = parseInt(incomingValue)
  
      this.setState(updateState)
    } else {
      updateState["orgSalaries"][event.target.name] = 0
  
      this.setState(updateState)
    }
  }

  handleTimeChange(event) {
    let updateState = this.state
    
    let incomingValue = (event.target.value.split("%")[0])
    let incomingTarget = event.target.name.split("_")

    if (incomingValue !== "") {
      updateState["orgTime"][incomingTarget[0]][incomingTarget[1]] = parseInt(incomingValue)

      this.setState(updateState)
    } else {
      updateState["orgTime"][incomingTarget[0]][incomingTarget[1]] = 0
    }
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
              calculatorData = {CalculatorData}
              handleCountChange = {this.handleCountChange}
              handleSalaryChange = {this.handleSalaryChange}
            />
          </div>
          <div className="project-column-container">
            <Project 
              orgSalaries = {this.state.orgSalaries}
              orgCount = {this.state.orgCount}
              orgTime = {this.state.orgTime}
              calculatorData = {CalculatorData}
              handleTimeChange = {this.handleTimeChange}
            />
          </div>
          <div className="savings-column-container">
            <Savings 
              savingsAmounts = {this.state.savingsAmounts}
              handleSavingsCalc = {this.handleSavingsCalc}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
