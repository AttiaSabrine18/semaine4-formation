// Counter.js
import React from 'react';
import '../css/counter.css';

class Counter extends React.Component {
 state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
        <div className="counter-container">
        <p className="counter-value">Compteur: {this.state.count}</p>
        <div className="counter-buttons">
          <button className="button" onClick={this.increment}>
            Incrémenter
          </button>
          <button className="button" onClick={this.decrement}>
            Décrémenter
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
