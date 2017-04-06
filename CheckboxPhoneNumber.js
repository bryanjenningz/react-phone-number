import React, { Component } from 'react';

const matrixDigitsToPhoneNumber = matrixDigits => '(123) 456-7890';

const toggleCheckbox = ({ x, y, digitIndex, checked }) => ({ checkboxMatrixDigits }) => {
  const matrix = checkboxMatrixDigits[digitIndex];
  const row = [...matrix[y]];
  // making copies of everything... the slowest possible way to change the state
  return {
    checkboxMatrixDigits: [
      checkboxMatrixDigits.slice(0, digitIndex),
      [
        ...matrix.slice(0, y),
        [
          ...row.slice(0, x),
          checked,
          ...row.slice(x + 1),
        ],
        ...matrix.slice(y + 1),
      ],
      checkboxMatrixDigits.slice(digitIndex + 1),
    ]
  };
};

const CheckboxPhoneNumber = ({ checkboxMatrixDigits, toggleCheckbox }) => (
  <div>
    <h2>Our form is very sophisticated.</h2>
    <h3>Please draw your phone number, thanks.</h3>
    <div>
      {checkboxMatrixDigits.map((checkboxMatrix, digitIndex) => (
        <div key={digitIndex}>
          {checkboxMatrix.map((row, y) => (
            <div key={y} style={{ flexDirection: 'row' }}>
              {row.map((isChecked, x) => (
                <div key={x}>
                  <input
                    type="checkbox"
                    value={isChecked}
                    onChange={checked => toggleCheckbox({x, y, digitIndex, checked})}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
    <div>
      <div>Your phone number is</div>
      <h1>{matrixDigitsToPhoneNumber(checkboxMatrixDigits)}</h1>
    </div>
  </div>
);

class CheckboxPhoneNumberContainer extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    const { checkboxMatrixDigits } = this.state;

    return (
      <CheckboxPhoneNumber
        checkboxMatrixDigits={checkboxMatrixDigits}
        toggleCheckbox={checkboxData => this.setState(toggleCheckbox(checkboxData))}
      />
    );
  }
}

export { CheckboxPhoneNumber, CheckboxPhoneNumberContainer };
