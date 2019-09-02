import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const LoadingBox = styled.div`
  font-family: 'Exo', sans-serif;
  color: #757575;
  ${({ screenRelative }) => screenRelative && 'height: calc(100vh - 145px);'}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`;

const Title = styled.div`
  font-size: 48px;
  font-weight: bold;
  color: #4b4b4b;
`;

const Description = styled.div`
  margin: 15px 100px 0 100px;
`;

const LoadingCircle = styled(CircularProgress)`
  && {
    color: #790d7e;
  }
`;

const Loading = ({ header, title, description, footer, screenRelative, ...otherProps }) => {
  return (
    <LoadingBox screenRelative={screenRelative} {...otherProps}>
      {header || <LoadingCircle color="inherit" />}
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
      {footer}
    </LoadingBox>
  );
};

Loading.propTypes = {
  header: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.array]),
  title: PropTypes.string,
  description: PropTypes.string,
  footer: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.array]),
  screenRelative: PropTypes.bool,
};

Loading.defaultProps = {
  header: null,
  title: null,
  description: null,
  footer: null,
  screenRelative: true,
};

export default Loading;
