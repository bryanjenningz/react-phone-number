import React, { Component } from 'react';
import pi from './pi.json';
const piDecimals = pi.slice(2).split('');

const forward = ({ start }) => ({ start: start + 1 });
const backward = ({ start }) => ({ start: Math.max(0, start - 1) });

const PiPhoneNumber = ({ start, forward, backward }) => (
  <div>
    <span onClick={backward}>backward</span>
    {' '}
    <span onClick={forward}>forward</span>
    <div>
      <span>3.</span>
      <span style={{ display: 'flex', flexDirection: 'row' }}>
        {piDecimals.map((digit, i) => (
          <span key={i}>
            {start <= i && i < start + 10 ?
              <h1>{digit}</h1> :
              <span>{digit}</span>}
          </span>
        ))}
      </span>
    </div>

  </div>
);

class PiPhoneNumberContainer extends Component {
  constructor() {
    super();
    this.state = { start: 0 };
  }

  render() {
    const { start } = this.state;

    return (
      <PiPhoneNumber
        start={start}
        forward={() => this.setState(forward)}
        backward={() => this.setState(backward)}
      />
    );
  }
}

export { PiPhoneNumber, PiPhoneNumberContainer };
