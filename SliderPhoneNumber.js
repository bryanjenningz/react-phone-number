import React, { Component } from 'react';

class SliderPhoneNumber extends Component {
  constructor() {
    super();
    this.state = { phoneNumber: 0 };
  }

  render() {
    const { phoneNumber } = this.state;
    
    return (
      <div>
        <div>Please enter your phone number:</div>
        <input
          type="range"
          value={phoneNumber}
          min={1000000000}
          max={9999999999}
          onChange={phoneNumber => this.setState({ phoneNumber })}
        />
        <span>{phoneNumber}</span>
      </div>
    );
  }
}

export { SliderPhoneNumber };
