import React, { Component } from 'react';

const randomXY = (maxX, maxY) => ({
  x: Math.floor(Math.random() * maxX),
  y: Math.floor(Math.random() * maxY),
});

const formatPhoneNumber = phoneNumber => {
  const filled = phoneNumber.concat(' '.repeat(10)).slice(0, 10);
  return `(${filled.slice(0, 3)})${filled.slice(3, 6)}-${filled.slice(6, 10)}`;
};

const addNumber = digit => ({ phoneNumber }) => ({
  phoneNumber: phoneNumber + digit
});
const clear = () => ({ phoneNumber: '' });
const submit = ({ phoneNumber }) => console.log(phoneNumber);

class MovingPhoneNumber extends Component {
  constructor(props) {
    super(props);
    const { maxX, maxY } = props;
    this.state = {
      numbers: Array.from({length: 10}, (_, i) =>
        Object.assign({}, {value: i}, randomXY(maxX, maxY))
      )
    };
  }

  render() {
    const { phoneNumber, maxX, maxY, addNumber, clear, submit } = this.props;
    const { numbers } = this.state;

    return (
      <div>
        <div>Please enter your phone number:</div>
        <h2>{formatPhoneNumber(phoneNumber)}</h2>
        <div>
          <button onClick={clear}>Clear</button>
          <button onClick={submit}>Submit</button>
        </div>
        <div style={{ position: 'relative', width: maxX, height: maxY }}>
          {numbers.map(({ value, x, y }) => (
            <div
              style={{ position: 'absolute', left: x, top: y }}
              onClick={() => addNumber(value)}>
              {value}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

class MovingPhoneNumberContainer extends Component {
  constructor() {
    super();
    this.state = { phoneNumber: '' };
  }
  render() {
    const { phoneNumber } = this.state;

    return (
      <MovingPhoneNumber
        phoneNumber={phoneNumber}
        maxX={800}
        maxY={300}
        addNumber={digit => this.setState(addNumber(digit))}
        clear={() => this.setState(clear)}
        submit={() => this.setState(submit)}
      />
    );
  }
}

export { MovingPhoneNumber, MovingPhoneNumberContainer };
