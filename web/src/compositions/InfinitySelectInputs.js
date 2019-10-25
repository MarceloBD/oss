import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import Plus from '../assets/icons/Plus';

import theme from '../utils/theme';
import SelectInput from '../elements/Input/SelectInput';
import ClickableIcon from '../elements/ClickableIcon';

const InfinitySelectInputs = ({ selectInputItems, placeholder, name }) => {
  const [numberOfInputs, setNumberofInputs] = useState(1);
  return (
    <>
      {Array.from(Array(numberOfInputs).keys()).map(idx => (
        <SelectInput items={selectInputItems} placeholder={placeholder} name={`${name}.${idx}`} key={idx} />
      ))}
      <ClickableIcon onClick={() => setNumberofInputs(numberOfInputs + 1)} icon={<Plus />} />
    </>
  );
};

InfinitySelectInputs.propTypes = {};

InfinitySelectInputs.defaultProps = {
  selectInputItems: [],
};

export default InfinitySelectInputs;
