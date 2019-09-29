import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import Clickable from './Clickable';

const TextBox = styled.div`
  color: ${theme.palette.background.default};
`;

const ClickableTextBoxPage = ({ text, link, disabled }) => {
  return (
    <>
      <Clickable link={link} disabled={disabled}>
        <TextBox>{text}</TextBox>
      </Clickable>
    </>
  );
};
ClickableTextBoxPage.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

ClickableTextBoxPage.defaultProps = {
  disabled: false,
};

export default ClickableTextBoxPage;
