import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'inherit']),
  onClick: PropTypes.func,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  color: 'primary',
  variant: 'contained',
  onClick: null,
  children: false,
};

export default Button;
