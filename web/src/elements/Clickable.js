import { withRouter, Link } from 'found';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ENTER_KEY = 13;

const LinkStyled = styled(Link)`
  background-color: transparent;
  outline: none;
  text-decoration: none;
  display: contents;
  color: inherit;
`;

const Clickable = ({ children, onClick, link, disabled }) => {
  const goTo = event => {
    if (onClick) {
      onClick(event);
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

  // eslint-disable-next-line no-nested-ternary
  return typeof children === 'string' ? (
    link ? (
      <LinkStyled onClick={goTo} onKeyPress={e => onKeyPress(e)} tabIndex="0" to={link}>
        {children}
      </LinkStyled>
    ) : (
      <>{children}</>
    )
  ) : (
    React.cloneElement(link ? <LinkStyled to={link}>{children}</LinkStyled> : children, {
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
  disabled: PropTypes.bool,
};

Clickable.defaultProps = {
  children: null,
  onClick: null,
  link: null,
  disabled: false,
};

export default withRouter(Clickable);
