import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons';


class App extends Component {
  constructor() {
    super();
    this.state = { result: "" }
  }

  onClickHandler = button => {

    if (button === "=") { this.calculate() }
    else if (button === "C") { this.reset() }
    else if (button === "CE") { this.backspace() }

    else { this.setState({ result: this.state.result + button }) }
  };

  calculate = () => {
    let checkResult = this.state.result
    if (checkResult === '0') this.setState({ result: '0' })
    try {
      this.setState({
        result: (eval(checkResult) || "0") + ""
      })
    } catch (e) { this.setState({ result: "error" }) }
  };

  reset = () => { this.setState({ result: "" }) }
  backspace = () => { this.setState({ result: this.state.result.slice(0, -1) }) }

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>

          <div className="result">
            <input type="text" placeholder='your text' value={this.state.result} className="form-control"
              onChange={(e) => { this.setState({ result: e.target.value }) }} />
            {this.state.result && this.state.result.match(/[^\d%\/*\-+\(\)\.]|Backspace|Enter/) &&
              <span className='red'>Wrong value!</span>
            }
          </div>
          <Buttons onClick={this.onClickHandler} />
        </div>
      </div>
    );
  }
}

export default App