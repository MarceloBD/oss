/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Box = styled.div`
  height: 100%;
  width: 100%;
`;

const Title = styled.div`
  ${theme.typography.h6};
  text-align: center;
  margin-top: 48px;
  color: grey;
  text-transform: uppercase;
  ${props =>
    props.isMobile &&
    `font-family: Exo;
    font-weight: bold;
    font-size: 18px;
    text-align: left;
    padding-left: 24px;
    `}
`;

const Subtitle = styled.div`
  font-family: Open Sans;
  font-size: 15px;
  line-height: 24px;
  color: #9b95a4;
  text-align: center;
  margin-top: 4px;

  ${props =>
    props.isMobile &&
    `font-size: 15px;
    text-align: left;
    padding: 0px 0px 24px 24px;
    line-height: 20px;
    `}
`;

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box>
          <Title>Não foi possível concluir a sua ação</Title>
          <Subtitle>Por favor, tente em outro momento</Subtitle>
        </Box>
      );
    }
    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;
