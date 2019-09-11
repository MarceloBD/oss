import React from 'react';
import Proptypes from 'prop-types';

const TextInput = ({ type, name, placeholder }) => {
  return <input type={type} name={name} placeholder={placeholder} />;
};

TextInput.propTypes = {
  type: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  placeholder: Proptypes.string.isRequired,
};

export default TextInput;
