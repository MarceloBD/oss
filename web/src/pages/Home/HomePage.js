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
  color: ${theme.palette.primary[800]}
`;

const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <TitleBox>{t('homePage.title')}</TitleBox>
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
