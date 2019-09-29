import { withRouter } from 'found';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Avatar from '../../elements/Avatar';
import Button from '../../elements/ClickableTextBox';
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
  const { t, i18n } = useTranslation();
  if (!isLoaded(i18n)) return <></>;
  const isLogged = Boolean(get(viewer, 'id'));
  return (
    <NavbarLayoutBox>
      <NavbarContent>
        <Button text={isLogged ? get(viewer, 'name') : t('loginPage.signIn')} link="/login" disabled={isLogged} />
        {isLogged && <Button text={t('loginPage.logOut')} link="/login" />}
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
  viewer: PropTypes.object.isRequired,
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
