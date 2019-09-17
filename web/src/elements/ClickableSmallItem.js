import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const ClickableSmallItemBox = styled.div`
  height: 45px;
  width: 290px;
  color: ${theme.palette.background.default};
  background: ${theme.palette.secondary[800]};
  padding-left: 27px;
  box-sizing: border-box;
  border-radius: 5px;
  ${theme.typography.light};
  display: flex;
  align-items: center;
`;

const ClickableSmallItem = ({ text, ...props }) => <ClickableSmallItemBox {...props}>{text}</ClickableSmallItemBox>;

ClickableSmallItem.propTypes = { text: PropTypes.string.isRequired };

export default ClickableSmallItem;
