import React from 'react';
import { render } from 'react-dom';
import { LeftRightArrowPhoneNumberContainer } from './LeftRightArrowPhoneNumber';

const App = () => (
  <div>
    <LeftRightArrowPhoneNumberContainer />
  </div>
);

render(<App />, document.querySelector('#root'));
