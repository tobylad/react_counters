import React from 'react';
import './Counter.css';

class Counter extends React.Component {

  render() {
    return (
      <div>
        <div className="counter">
          <button onClick={ () => {this.props.increment(this.props.countBy, this.props.index)} }>+{this.props.countBy}</button>
          <div className="count"> {this.props.count}</div>
          <button onClick={ () => {this.props.decrement(this.props.countBy, this.props.index)} }>-{this.props.countBy}</button>
          <button onClick={ () => {this.props.deleteCounter(this.props.index)} } >Delete</button>
        </div>
      </div>
      )
  }
}

export default Counter;
