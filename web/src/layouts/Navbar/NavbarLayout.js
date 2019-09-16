import { withRouter } from 'found';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Avatar from '../../elements/Avatar';
import LoginButton from '../../elements/ClickableTextBox';
import theme from '../../utils/theme';

const NavbarContent = styled.div`
  height: 73px;
  background: ${theme.palette.primary.default};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 36px;
  box-sizing: border-box;
`;

const AvatarStyled = styled(Avatar)`
  margin-left: 25px;
`;

const NavbarLayout = ({ children }) => {
  const { t } = useTranslation();
  return (
    <>
      <NavbarContent>
        <LoginButton text={t('signin')} link="/login" />
        <AvatarStyled />
      </NavbarContent>
      {children}
    </>
  );
};

NavbarLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default withRouter(NavbarLayout);
