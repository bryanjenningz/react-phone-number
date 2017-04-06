import React from 'react';
import { render } from 'react-dom';
import { LeftRightArrowPhoneNumberContainer } from './LeftRightArrowPhoneNumber';
import { MovingPhoneNumberContainer } from './MovingPhoneNumber';
import { CheckboxPhoneNumberContainer } from './CheckboxPhoneNumber';
import { FileUploadPhoneNumberContainer } from './FileUploadPhoneNumber';
import { PiPhoneNumberContainer } from './PiPhoneNumber';
import { RandomPhoneNumberContainer } from './RandomPhoneNumber';
import { SliderPhoneNumber } from './SliderPhoneNumber';
import { IncrementPhoneNumberContainer } from './IncrementPhoneNumber';

const App = () => (
  <div>
    <LeftRightArrowPhoneNumberContainer />
    <MovingPhoneNumberContainer />
    <CheckboxPhoneNumberContainer />
    <FileUploadPhoneNumberContainer />
    <PiPhoneNumberContainer />
    <RandomPhoneNumberContainer />
    <SliderPhoneNumber />
    <IncrementPhoneNumberContainer />
  </div>
);

render(<App />, document.querySelector('#root'));
