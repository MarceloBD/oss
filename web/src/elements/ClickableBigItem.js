import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import Clickable from './Clickable';

const ClickableBigItemBox = styled.div`
  height: 320px;
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.palette.secondary.default};
  border-radius: 10px;
  color: ${theme.palette.background.default};
  font-size: 30px;
  ${theme.typography.light};
`;

const ClickableBigItem = ({ text, onClick }) => (
  <Clickable onClick={onClick}>
    <ClickableBigItemBox>{text}</ClickableBigItemBox>
  </Clickable>
);

ClickableBigItem.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

ClickableBigItem.defaultProps = {
  onClick: null,
};

export default ClickableBigItem;
