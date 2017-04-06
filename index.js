import React from 'react';
import { render } from 'react-dom';
import { LeftRightArrowPhoneNumberContainer } from './LeftRightArrowPhoneNumber';
import { MovingPhoneNumberContainer } from './MovingPhoneNumber';
// import { RotaryDialPhoneNumber } from './RotaryDialPhoneNumber';
import { CheckboxPhoneNumberContainer } from './CheckboxPhoneNumber';
import { FileUploadPhoneNumberContainer } from './FileUploadPhoneNumber';
import { PiPhoneNumberContainer } from './PiPhoneNumber';
import { RandomPhoneNumberContainer } from './RandomPhoneNumber';

const App = () => (
  <div>
    <LeftRightArrowPhoneNumberContainer />
    <MovingPhoneNumberContainer />
    <CheckboxPhoneNumberContainer />
    <FileUploadPhoneNumberContainer />
    <PiPhoneNumberContainer />
    <RandomPhoneNumberContainer />
  </div>
);

render(<App />, document.querySelector('#root'));
