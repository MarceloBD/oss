import PropTypes from 'prop-types';
import React from 'react';

import Clickable from './Clickable';

const ClickableIcon = ({ icon, onClick, link }) => (
  <Clickable link={link} onClick={onClick}>
    <div>{icon}</div>
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
