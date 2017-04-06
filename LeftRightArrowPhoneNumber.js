import React, { Component } from 'react';

const INITIAL_PHONE_NUMBER = 1234567890;

const increment = ({ phoneNumber }) => ({ phoneNumber: phoneNumber + 1 });
const decrement = ({ phoneNumber }) => ({ phoneNumber: phoneNumber - 1 });
const reset = () => ({ phoneNumber: INITIAL_PHONE_NUMBER });
const submit = ({ phoneNumber }) => console.log('Phone number:', phoneNumber);

const LeftRightArrowPhoneNumber = ({ phoneNumber, decrement, increment, reset, submit }) => (
  <div>
    <div>Please enter your phone number</div>
    <div>{phoneNumber}</div>
    <div>
      <button onClick={decrement}>{'<'}</button>
      <button onClick={increment}>{'>'}</button>
    </div>
    <div>
      <button onClick={reset}>reset</button>
      <button onClick={submit}>Submit</button>
    </div>
  </div>
);

class LeftRightArrowPhoneNumberContainer extends Component {
  constructor() {
    super();
    this.state = { phoneNumber: INITIAL_PHONE_NUMBER };
  }

  render() {
    const { phoneNumber } = this.state;
    return (
      <LeftRightArrowPhoneNumber
        phoneNumber={phoneNumber}
        increment={() => this.setState(increment)}
        decrement={() => this.setState(decrement)}
        reset={() => this.setState(reset)}
        submit={() => this.setState(submit)}
      />
    );
  }
}

export { LeftRightArrowPhoneNumber, LeftRightArrowPhoneNumberContainer };
