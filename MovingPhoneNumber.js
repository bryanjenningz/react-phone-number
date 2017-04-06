import React, { Component } from 'react';

const randomXY = (maxX, maxY) => ({
  x: Math.floor(Math.random() * (maxX - 50)),
  y: Math.floor(Math.random() * (maxY - 50)),
});

const randomVelocity = () => ({
  vx: Math.floor(Math.random() * 20) + 10,
  vy: Math.floor(Math.random() * 20) + 10,
});

const formatPhoneNumber = phoneNumber => {
  const filled = phoneNumber.concat('_'.repeat(10)).slice(0, 10);
  return `(${filled.slice(0, 3)})${filled.slice(3, 6)}-${filled.slice(6, 10)}`;
};

const addNumber = digit => ({ phoneNumber }) => ({ phoneNumber: phoneNumber + digit });
const submit = ({ phoneNumber }) => console.log(phoneNumber);
const updateNumbers = (maxX, maxY) => ({ numbers }) => ({
  numbers: numbers.map(number => {
    const { x, y, vx, vy } = number;
    let newVx = vx;
    let newVy = vy;
    if (x <= 0 || x >= maxX - 50) {
      newVx = -newVx;
    }
    if (y <= 0 || y >= maxY - 50) {
      newVy = -newVy;
    }

    return {
      ...number,
      x: x + newVx,
      y: y + newVy,
      vx: newVx,
      vy: newVy,
    };
  })
});

class MovingPhoneNumber extends Component {
  constructor(props) {
    super(props);
    const { maxX, maxY } = props;
    this.state = {
      numbers: Array.from({length: 10}, (_, i) => ({
        value: i,
        ...randomVelocity(),
        ...randomXY(maxX, maxY),
      }))
    };
  }

  componentDidMount() {
    const { maxX, maxY } = this.props;
    const update = () => {
      this.setState(updateNumbers(maxX, maxY));
    };
    setInterval(update, 100);
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
        <div style={{ position: 'relative', width: maxX, height: maxY, border: '2px solid black' }}>
          {numbers.map(({ value, x, y }, i) => (
            <div
              key={i}
              style={{
                position: 'absolute', left: x, top: y, width: 50, height: 50,
                background: 'black', color: 'white', textAlign: 'center', borderRadius: 4,
              }}
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
        clear={() => this.setState({ phoneNumber: '' })}
        submit={() => this.setState(submit)}
      />
    );
  }
}

export { MovingPhoneNumber, MovingPhoneNumberContainer };
