import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0
  }

  onIncrementOneMore = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  onDecrementOneMore = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  onUpdateCount = value => {
    let count = this.state.count;

    if (value === -1 && count === 0) {
      return;
    }

    this.setState({
      count: this.state.count + value
    })
  }

  render() {
    return (
      <h1>
        <p>
          Number:
            <strong>
            {this.state.count}
          </strong>
        </p>

        <button
          onClick={this.onIncrementOneMore}>
          Increment
        </button>

        <button
          onClick={this.onDecrementOneMore}>
          Decrement
        </button>

        <button
          onClick={() => this.onUpdateCount(1)}>
          Increment
        </button>

        <button
          onClick={() => this.onUpdateCount(-1)}>
          Decrement
        </button>
      </h1>
    )
  }
}

// Solução 01 - Bind
// constructor(props) {
//   super();

//   this.onIncrementOneMore = this.onIncrementOneMore.bind(this);
//   this.onDecrementOneMore = this.onDecrementOneMore.bind(this);
// }

//Solução 02 - Função Arrow
//<button
//    onClick={ this.onIncrementOneMore }>
//  Increment
// </button> 

// Solução 03 - Função Arrow
// onIncrementOneMore = () => {
    // this.props.number++;
    // console.log(this);
// }