import React, { Component } from 'react';

const incrementDigit = ({ changingDigit }) => ({
  changingDigit: changingDigit + 1 % 10
});

const setDigit = changingDigit => ({ phoneNumber }) => ({
  phoneNumber: phoneNumber + changingDigit
});

const restart = () => ({ phoneNumber: '' });

class ChangingDigitPhoneNumber extends Component {
  constructor() {
    super();
    this.state = { changingDigit: 0 };
    setInterval(() => this.setState(incrementDigit), 100);
  }

  render() {
    const { phoneNumber, setDigit, restart } = this.props;
    const phoneNumberArray = (phoneNumber + ' '.repeat(10 - phoneNumber.length)).split('');
    const { changingDigit } = this.state

    return (
      <div>
        <div><b>Please enter your phone number:</b></div>
        <div>
          {phoneNumberArray.map((digit, i) => {
            if (digit === ' ' && (i === 0 || phoneNumberArray[i - 1] !== ' ')) {
              return <span key={i}>{changingDigit}</span>
            } else {
              return <span key={i}>{digit}</span>
            }
          })}
        </div>
        <div>
          <button onClick={restart}>Restart</button>
          <button onClick={setDigit(changingDigit)}>Set</button>
        </div>
      </div>
    );
  }
}

class ChangingDigitPhoneNumberContainer extends Component {
  constructor() {
    super();
    this.state = { phoneNumber: '' };
  }

  render() {
    const { phoneNumber } = this.state;

    return (
      <ChangingDigitPhoneNumber
        phoneNumber={phoneNumber}
        setDigit={(changingDigit) => this.setState(setDigit(changingDigit))}
        restart={() => this.setState(restart)}
      />
    );
  }
}
