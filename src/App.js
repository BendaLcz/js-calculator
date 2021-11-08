import './App.css';
import './fonts.css';

import React from "react";

/* MAIN REACT COMPONENT */

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      inputValue: 0,
      storedValue: "",
      result: 0,
      memory: 0
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.clearAll = this.clearAll.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.equals = this.equals.bind(this);
    this.memorize = this.memorize.bind(this);
    this.recall = this.recall.bind(this);
    this.forget = this.forget.bind(this);
    
  }
    
  handleChange (event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  
/* NUMERIC BUTTONS ---> DISPLAY COMMUNICATION */
  
  changeValue (event) {
    this.setState(state => {
      const inputArr = String(state.inputValue).split("");
      const decimalCheck = (arr) => {
        if (arr.some(item => item == ".")) {
          return true;
        } else {
          return false;
        }
      }
      const equalCheck = () => {
        let regex = /[=]$/;
        let result = regex.test(state.storedValue);
        return result;
      }
      if (equalCheck() === true && event.target.value != ".") {
        return {
          inputValue: event.target.value,
          storedValue: "",
          result: 0
        }
      }
      else if (equalCheck() === true && event.target.value == ".") {
        return {
          inputValue: "0" + event.target.value,
          storedValue: "",
          result: 0
        }
      }
      else if (event.target.value == ".") {
        if (decimalCheck(inputArr)) {
          return {
            inputValue: state.inputValue
          };
        } else {
          return {
            inputValue: state.inputValue + "."
          };
        }
      }
      else if (decimalCheck(inputArr)) {
        return {
          inputValue: state.inputValue + event.target.value
        };
      }
      else if (state.inputValue == "0") {
        return {
          inputValue: event.target.value
        }
      }
      else if (state.inputValue == "-0") {
        return {
          inputValue: "-" + event.target.value
        }
      }
      else return {
          inputValue: state.inputValue + event.target.value
      }
    });
  }

/* BUTTON ARITHMETIC & OTHER FUNCTIONS */
  
  clearAll () {
    this.setState({
      inputValue: 0,
      storedValue: "",
      result: 0
    })
  }
  
  add () {
    this.setState(state => {
      const symbolCheck = () => {
        let regex = /[+]$|[-]$|[*]$|[/]$/;
        let result = regex.test(state.storedValue);
        return result;
      }
      const equalCheck = () => {
        let regex = /[=]$/;
        let result = regex.test(state.storedValue);
        return result;
      }
      if (state.inputValue[0] == "-" && symbolCheck() === true) {
        return {
          inputValue: state.inputValue.slice(1, ),
          storedValue: state.storedValue.slice(0, state.storedValue.length - 1) + "+"
        }
      }
      else if (state.inputValue[0] == "-") {
        return {
          inputValue: state.inputValue.slice(1, )
        }
      }
      else if (state.result === 0 && equalCheck() === true) {
        return {
          inputValue: 0,
          storedValue: state.result + "+"
        };
      }
      else if (symbolCheck() === true && state.inputValue == "0") {
        return {
          storedValue: state.storedValue.slice(0, state.storedValue.length - 1) + "+"
        };
      }
      else if (state.result === 0) {
        return {
          inputValue: 0,
          storedValue: state.storedValue + state.inputValue + "+"
        };
      }
      else {
        return {
          inputValue: 0,
          storedValue: state.result + "+",
          result: 0
        };
      }
    });
  }
  
  subtract () {
    this.setState(state => {
      const symbolCheck = () => {
        let regex = /[*]$|[/]$/;
        let result = regex.test(state.storedValue);
        return result;
      }
      const minusCheck = () => {
        let regex = /[-]$/;
        let result = regex.test(state.storedValue);
        return result;
      }
      const plusCheck = () => {
        let regex = /[+]$/;
        let result = regex.test(state.storedValue);
        return result;
      }
      const equalCheck = () => {
        let regex = /[=]$/;
        let result = regex.test(state.storedValue);
        return result;
      }
      if (state.storedValue == "" && state.inputValue == "0") {
        return {
          inputValue: "-" + state.inputValue
        }
      }
      else if (state.storedValue == "" && state.inputValue == "-0") {
        return {
          inputValue: state.inputValue
        }
      }
      else if (state.result === 0 && equalCheck() === true) {
        return {
          inputValue: 0,
          storedValue: state.result + "-"
        };
      }
      else if (minusCheck() === true && state.inputValue == "0") {
        return {
          storedValue: state.storedValue.slice(0, state.storedValue.length - 1) + "+"
        }
      }
      else if (plusCheck() === true && state.inputValue == "0") {
        return {
          storedValue: state.storedValue.slice(0, state.storedValue.length - 1) + "-"
        }
      }
      else if (symbolCheck() === true && state.inputValue == "0") {
        return {
          inputValue: "-" + state.inputValue,
          storedValue: state.storedValue
        }
      }
      else if (symbolCheck() === true && state.inputValue[0] == "-") {
        return {
          inputValue: state.inputValue,
          storedValue: state.storedValue
        }
      }
      else if (state.result === 0) {
        return {
          inputValue: 0,
          storedValue: state.storedValue + state.inputValue + "-"
        }
      } else {
        return {
          inputValue: 0,
          storedValue: state.result + "-",
          result: 0
        }
      }
    });
  }
  
  multiply () {
    this.setState(state => {
      const symbolCheck = () => {
        let regex = /[+]$|[-]$|[*]$|[/]$/;
        let result = regex.test(state.storedValue);
        return result;
      }
      const equalCheck = () => {
        let regex = /[=]$/;
        let result = regex.test(state.storedValue);
        return result;
      }
      if (state.inputValue[0] == "-" && symbolCheck() === true) {
        return {
          inputValue: state.inputValue.slice(1, ),
          storedValue: state.storedValue.slice(0, state.storedValue.length - 1) + "*"
        }
      }
      else if (state.result === 0 && equalCheck() === true) {
        return {
          inputValue: 0,
          storedValue: state.result + "*"
        };
      }
      else if (symbolCheck() === true  && state.inputValue == "0") {
        const overrideValue = String(state.storedValue).split("");
        overrideValue.pop();
        overrideValue.join("");
        return {
          storedValue: state.storedValue.slice(0, state.storedValue.length - 1) + "*"
        };
      }
      else if (state.result === 0) {
        return {
          inputValue: 0,
          storedValue: state.storedValue + state.inputValue + "*"
        };
      } else {
        return {
          inputValue: 0,
          storedValue: state.result + "*",
          result: 0
        };
      }
    });
  }
  
  divide () {
    this.setState(state => {
      const symbolCheck = () => {
        let regex = /[+]$|[-]$|[*]$|[/]$/;
        let result = regex.test(state.storedValue);
        return result;
      }
      const equalCheck = () => {
        let regex = /[=]$/;
        let result = regex.test(state.storedValue);
        return result;
      }
      if (state.inputValue[0] == "-" && symbolCheck() === true) {
        return {
          inputValue: state.inputValue.slice(1, ),
          storedValue: state.storedValue.slice(0, state.storedValue.length - 1) + "/"
        }
      }
      else if (state.result === 0 && equalCheck() === true) {
        return {
          inputValue: 0,
          storedValue: state.result + "/"
        };
      }
      else if (symbolCheck() === true  && state.inputValue == "0") {
        return {
          storedValue: state.storedValue.slice(0, state.storedValue.length - 1) + "/"
        };
      }
      else if (state.result === 0) {
        return {
          inputValue: 0,
          storedValue: state.storedValue + state.inputValue + "/"
        };
      } else {
        return {
          inputValue: 0,
          storedValue: state.result + "/",
          result: 0
        };
      }
    });
  }
  
  equals () {
    this.setState(state => {
      if (state.result == 0 && state.storedValue[state.storedValue.length - 1] !== "=") {
        return {
          inputValue: eval(state.storedValue.concat(state.inputValue)),
          storedValue: state.storedValue + state.inputValue + "=",
          result: eval(state.storedValue.concat(state.inputValue))
        };
      } else {
        return {
          inputValue: state.inputValue,
          storedValue: state.storedValue,
          result: state.result
        };
      }
    });
  }
  
  memorize () {
    this.setState(state => ({
      memory: state.inputValue
    }));
  }
  
  recall () {
    this.setState(state => ({
      inputValue: state.memory
    }));
  }
  
  forget () {
    this.setState({
      memory: 0
    });
  }
  
/* RENDER CALCULATOR */
  
  render () {
    return (
    <div>
      <div id="wrapper">
        <div id="displayFull">
          <p id="formula"><span>{this.state.memory != 0 ? "M" : ""}</span><span>{this.state.storedValue}</span></p>
          <p id="display">{this.state.inputValue}</p>
        </div>
        <div class="flexRow">
          <button id="memorize" onClick={this.memorize}>{"M+"}</button>
          <button id="recall" onClick={this.recall}>{"MR"}</button>
          <button id="forget" onClick={this.forget}>{"M-"}</button>
          <button id="clear" onClick={this.clearAll}>{"AC"}</button>
        </div>
        <div className="flexRow">
          <button id="seven" value={"7"} onClick={this.changeValue}>{"7"}</button>
          <button id="eight" value={"8"} onClick={this.changeValue}>{"8"}</button>
          <button id="nine" value={"9"} onClick={this.changeValue}>{"9"}</button>
          <button class="operator" id="divide" onClick={this.divide}>{"/"}</button>
        </div>
        <div class="flexRow">
          <button id="four" value={"4"} onClick={this.changeValue}>{"4"}</button>
          <button id="five" value={"5"} onClick={this.changeValue}>{"5"}</button>
          <button id="six" value={"6"} onClick={this.changeValue}>{"6"}</button>
          <button class="operator" id="multiply" onClick={this.multiply}>{"*"}</button>
        </div>
        <div class="flexRow">
          <button id="one" value={"1"} onClick={this.changeValue}>{"1"}</button>
          <button id="two" value={"2"} onClick={this.changeValue}>{"2"}</button>
          <button id="three" value={"3"} onClick={this.changeValue}>{"3"}</button>
          <button class="operator" id="subtract" onClick={this.subtract}>{"-"}</button>
        </div>
        <div class="flexRow">
          <button id="zero" value={"0"} onClick={this.changeValue}>{"0"}</button>
          <button id="decimal" value={"."} onClick={this.changeValue}>{"."}</button>
          <button id="equals" onClick={this.equals}>{"="}</button>
          <button class="operator" id="add" onClick={this.add}>{"+"}</button>
        </div>
      </div>
      <div id="footer">
        <p>&copy; 2021 Libor Benda</p>
      </div>
    </div>
    )
  }
}

export default App;
