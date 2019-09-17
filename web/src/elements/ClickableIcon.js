import PropTypes from 'prop-types';
import React from 'react';

import Clickable from './Clickable';

const ClickableIcon = ({ icon, link }) => <Clickable link={link}>{icon}</Clickable>;

ClickableIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
};

export default ClickableIcon;
