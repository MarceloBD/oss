import { Field, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import theme from '../../utils/theme';

const SelectBox = styled.div`
  & select {
    width: 100%;
  }
`;

const Arrow = styled.span`
  &:after {
    content: url(https://i.stack.imgur.com/i9WFO.png);
    margin-left: -20px;
    padding: 0.1em;
    pointer-events: none;
  }
`;

const SelectInput = ({ items, placeholder, name }) => {
  return (
    <SelectBox>
      <Arrow>
        <Field placeholder={placeholder} name={name} component="input" list={name} />
      </Arrow>
      <Field id={name} placeholder={placeholder} component="datalist">
        {items.map((item, idx) => (
          <Field value={item} component="option" key={idx}>
            {item}
          </Field>
        ))}
      </Field>
    </SelectBox>
  );
};

SelectInput.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectInput;
