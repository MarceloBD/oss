import PropTypes from 'prop-types';
import React from 'react';
import { flattenProp } from 'recompose';

import Clickable from './Clickable';

const enhance = flattenProp('image');

const ClickableImage = enhance(({ link, onClick, src, height, width }) => (
  <Clickable link={link} onClick={onClick}>
    <img src={src} alt="" width={width} height={height} />
  </Clickable>
));

ClickableImage.propTypes = {
  link: PropTypes.string,
  onClick: PropTypes.func,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
  }).isRequired,
};

ClickableImage.defaultProps = {
  link: '',
  onClick: null,
  height: null,
  width: 10,
};

export default ClickableImage;
