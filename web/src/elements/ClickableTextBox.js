import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import Clickable from './Clickable';

const TextBox = styled.div`
  color: ${theme.palette.background.default};
`;

const ClickableTextBoxPage = ({ text, link, disabled, onClick }) => {
  return (
    <>
      <Clickable link={link} disabled={disabled} onClick={onClick}>
        <TextBox>{text}</TextBox>
      </Clickable>
    </>
  );
};
ClickableTextBoxPage.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

ClickableTextBoxPage.defaultProps = {
  disabled: false,
  onClick: null,
  link: null,
};

export default ClickableTextBoxPage;
