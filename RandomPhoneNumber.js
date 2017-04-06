import React, { Component } from 'react';

const randomPhoneNumber = () => String(Math.random()).slice(2, 12);
const yes = ({ phoneNumber }) => console.log('phone number:', phoneNumber);
const no = () => ({ phoneNumber: randomPhoneNumber() });

const RandomPhoneNumber = ({ phoneNumber, yes, no }) => (
  <div>
    <div>Is this your phone number? <b>{phoneNumber}</b></div>
    <div>
      <button onClick={yes}>Yes</button>
      <button onClick={no}>No</button>
    </div>
  </div>
);

class RandomPhoneNumberContainer extends Component {
  constructor() {
    super();
    this.state = { phoneNumber: randomPhoneNumber() }
  }

  render() {
    const { phoneNumber } = this.state;

    return (
      <RandomPhoneNumber
        phoneNumber={phoneNumber}
        yes={() => this.setState(yes)}
        no={() => this.setState(no)}
      />
    );
  }
}

export { RandomPhoneNumber, RandomPhoneNumberContainer };
