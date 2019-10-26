import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Clickable from './Clickable';

const IconBox = styled.div`
  display: contents;
`;

const ClickableIcon = ({ icon, onClick, link }) => (
  <Clickable link={link} onClick={onClick}>
    <IconBox>{icon}</IconBox>
  </Clickable>
);

ClickableIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  link: PropTypes.string,
  onClick: PropTypes.func,
};

ClickableIcon.defaultProps = {
  onClick: null,
  link: null,
};

export default ClickableIcon;
