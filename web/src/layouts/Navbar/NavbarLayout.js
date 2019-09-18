import { withRouter } from 'found';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import isLoaded from '../../utils/isLoaded';

import Avatar from '../../elements/Avatar';
import LoginButton from '../../elements/ClickableTextBox';
import { StateContext } from '../../utils/context';
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
  const { t, i18n } = useTranslation();
  if (!isLoaded(i18n)) return <></>;

  return (
    <NavbarLayoutBox>
      <NavbarContent>
        <LoginButton text={t('signin')} link="/login" />
        <AvatarStyled />
      </NavbarContent>
      <StateContext.Provider value={{ t, i18n }}>
        <ChildrenBox>{children}</ChildrenBox>
      </StateContext.Provider>
    </NavbarLayoutBox>
  );
};

NavbarLayout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default withRouter(NavbarLayout);
