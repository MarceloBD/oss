import { withRouter } from 'found';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Avatar from '../../elements/Avatar';
import LoginButton from '../../elements/ClickableTextBox';
import theme from '../../utils/theme';

const NavbarLayoutBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

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

const ChildrenBox = styled.div`
  flex: 1;
  overflow: auto;
`;

const NavbarLayout = ({ children }) => {
  const { t } = useTranslation();
  return (
    <NavbarLayoutBox>
      <NavbarContent>
        <LoginButton text={t('signin')} link="/login" />
        <AvatarStyled />
      </NavbarContent>
      <ChildrenBox>{children}</ChildrenBox>
    </NavbarLayoutBox>
  );
};

NavbarLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default withRouter(NavbarLayout);
