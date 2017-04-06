import React, { Component } from 'react';

const range = (lo, hi) => Array.from({length: hi - lo}, (_, i) => lo + i);
const zeroToNine = range(0, 10);

class RotaryDialPhoneNumber extends Component {
  constructor() {
    super();
    this.state = { rotation: 0 }; // 0% - 100% rotated
  }

  render() {
    const { phoneNumber, addNumber } = this.props;
    const { rotation } = this.state;
    return (
      <div>
        <div>Please enter your phone number</div>
        <div>{phoneNumber}</div>
        <div>
          {zeroToNine.map(number => (
            <div key={number}>
              {number}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export { RotaryDialPhoneNumber };
