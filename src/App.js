import React from 'react';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      counterValues: [
        { value: 0, countBy: 1 },
        { value: 0, countBy: 2 },
        { value: 0, countBy: 3 }
      ]
    }
  }

  getTotal = () => {
    return this.state.counterValues.reduce((sum, counter) => sum + counter.value, 0);
  }

  addCounter = (e) => {
    e.preventDefault()
    let countBy = +e.target.firstChild.value

    if(countBy === 0) countBy = 1;

    const counterValues = [...this.state.counterValues]
    counterValues.push({ value: 0, countBy })
    this.setState({ counterValues })
    e.target.reset();
  };

  deleteCounter = (index) => {
    const counterValues = [...this.state.counterValues]
    counterValues.splice(index, 1)
    this.setState({ counterValues })
  };

  increment = (countBy, index) => {
    this.setState((prevState, props) => prevState.counterValues[index].value += prevState.counterValues[index].countBy)
  };

  decrement = (countBy, index) => {
    this.setState((prevState, props) => prevState.counterValues[index].value -= prevState.counterValues[index].countBy)
  };

  render() {
    return (
      <div className="page-center-frame">
        <div className="counters-container">
          <div className="counters">
            {
              this.state.counterValues.map((value, index) =>
                <Counter
                  countBy={value.countBy}
                  increment={this.increment}
                  decrement={this.decrement}
                  count={value.value}
                  index={index}
                  deleteCounter={this.deleteCounter} />
              )
            }
          </div>
        </div>
        <div className="total">{this.getTotal()}</div>
        <form className="form" onSubmit={this.addCounter}>
          <input type="text" placeholder="Count by?" />
          <button>Add a counter!</button>
        </form>
      </div>
      )
  };
}

export default App;
