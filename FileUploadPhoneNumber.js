import React, { Component } from 'react';

const submit = (areaCode, first3, last4) => {
  const phoneNumber = [areaCode, first3, last4].map(filename => {
    const filenameRegex = /^(\d{3,4})\.(?:\.)+$/;
    if (typeof filename === 'string' && filenameRegex.test(filename)) {
      return filename.match(filenameRegex)[1];
    }
    return '';
  }).join('');

  if (phoneNumber.length === 10) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  }

  return '';
};

const FileUploadPhoneNumber = ({submit}) => {
  let areaCode;
  let first3;
  let last4;
  return (
    <div>
      <div>
        <div>Please enter your phone number:</div>
        <div>Area code: <input ref={n => areaCode = n} type="file" /></div>
        <div>First 3 digits: <input ref={n => first3 = n} type="file" /></div>
        <div>Last four digits: <input ref={n => last4 = n} type="file" /></div>
      </div>
      <div>
        <button onClick={() => submit(
          (areaCode || {}).filename,
          (first3 || {}).filename,
          (last4 || {}).filename
        )}>Submit</button>
      </div>
    </div>
  );
};

const FileUploadPhoneNumberContainer = () => (
  <FileUploadPhoneNumber submit={(...args) => console.log(submit(...args))} />
);

export { FileUploadPhoneNumber, FileUploadPhoneNumberContainer };
