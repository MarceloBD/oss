import { withRouter } from 'found';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Avatar from '../../elements/Avatar';
import Button from '../../elements/ClickableTextBox';
import Auth from '../../modules/auth/Auth';
import SignOutMutation from '../../modules/login/mutations/SignOutMutation';
import { StateContext } from '../../utils/context';
import isLoaded from '../../utils/isLoaded';
import { createQueryRenderer, graphql } from '../../utils/relay';
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
  padding: 33px 100px;
`;

const NavbarLayout = ({ children, viewer }) => {
  console.log(viewer);
  const { t, i18n } = useTranslation();
  const [isFirefox, setIsFirefox] = useState(true);
  const isLoadedi18n = isLoaded(i18n);
  useEffect(() => setIsFirefox(typeof InstallTrigger !== 'undefined'), []);
  const isLogged = Boolean(get(viewer, 'id'));
  if (isFirefox && !isLoadedi18n) return <></>;

  const signOut = () => {
    SignOutMutation.commit({ variables: {} });
    Auth.logout();
  };

  return (
    <NavbarLayoutBox>
      <NavbarContent>
        <Button text={isLogged ? get(viewer, 'name') : t('loginPage.signIn')} link="/login" disabled={isLogged} />
        {isLogged && <Button text={t('loginPage.logOut')} onClick={signOut} />}
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
  viewer: PropTypes.object,
};

NavbarLayout.defaultProps = {
  viewer: null,
};

export default createQueryRenderer(withRouter(NavbarLayout), {
  query: graphql`
    query NavbarLayoutQuery {
      viewer {
        id
        name
      }
    }
  `,
});
