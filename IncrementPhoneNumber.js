import React, { Component } from 'react';

const formatPhoneNumber = phoneNumber => (
  `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
);
const increment = ({ phoneNumber }) => ({ phoneNumber: phoneNumber + 1 });
const submit = phoneNumber => console.log('phone number:', phoneNumber);

class IncrementPhoneNumber extends Component {
  constructor() {
    super();
    this.state = { phoneNumber: 0 }
  }

  render() {
    const { phoneNumber } = this.state;

    return (
      <div>
        <h2>Please enter your phone number:</h2>
        <div>
          <span>{formatPhoneNumber(phoneNumber)}</span>
          <button onClick={() => this.setState(increment)}>+</button>
          <button onClick={() => submit(phoneNumber)}>Submit</button>
        </div>
      </div>
    );
  }
}

const IncrementPhoneNumberContainer = () => (
  <IncrementPhoneNumber submit={submit} />
);

export { IncrementPhoneNumber, IncrementPhoneNumberContainer };
