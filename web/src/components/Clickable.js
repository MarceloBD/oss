import { withRouter } from 'found';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ENTER_KEY = 13;

const Link = styled.a`
  border: 0;
  cursor: pointer;
  background-color: transparent;
  outline: none;
`;

const Clickable = ({ children, onClick, link, router, disabled }) => {
  const goTo = event => {
    if (onClick) {
      onClick(event);
    }
    if (link) {
      router.push(link);
    }
  };

  const onKeyPress = event => {
    const keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode === ENTER_KEY) {
      goTo(event);
    }
  };
  if (disabled) {
    return <>{children}</>;
  }

  return typeof children === 'string' ? (
    <Link onClick={goTo} onKeyPress={e => onKeyPress(e)} tabIndex="0">
      {children}
    </Link>
  ) : (
    React.cloneElement(children, {
      onClick: goTo,
      onKeyPress: e => onKeyPress(e),
      tabIndex: '0',
      style: { cursor: 'pointer', outline: 'none' },
    })
  );
};

Clickable.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.string]),
  onClick: PropTypes.func,
  link: PropTypes.string,
  router: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
};

Clickable.defaultProps = {
  children: null,
  onClick: null,
  link: null,
  disabled: false,
};

export default withRouter(Clickable);
