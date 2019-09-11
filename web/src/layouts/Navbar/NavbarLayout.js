import { withRouter } from 'found';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NavbarContent = styled.div`
  height: 73px;
  background: #880044;
`;

const NavbarLayout = ({ children }) => (
  <>
    <NavbarContent />
    {children}
  </>
);

NavbarLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default withRouter(NavbarLayout);
