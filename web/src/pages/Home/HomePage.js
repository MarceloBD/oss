import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { createQueryRenderer, graphql } from '../../utils/relay';
import theme from '../../utils/theme';

const TitleBox = styled.div`
  font-size: 40px;
  width: 368px;
  height: 233px;
  margin: 97px 0px 0px 97px;
  color: ${theme.palette.primary[800]};
`;

const MenuTitle = styled.div``;

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const [create, setCreate] = React.useState(false);

  React.useEffect(() => {
    i18n.on('loaded', loaded => {
      if (loaded && loaded[i18n.language]) setCreate(true);
    });
  });

  return (
    <>
      {create && (
        <>
          <TitleBox>{t('homePage.title')}</TitleBox>
          <MenuTitle>{t('homePage.menuTitle')}</MenuTitle>
        </>
      )}
    </>
  );
};

export default createQueryRenderer(HomePage, {
  query: graphql`
    query HomePageQuery {
      viewer {
        id
      }
    }
  `,
});
