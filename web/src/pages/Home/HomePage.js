import React from 'react';
import styled from 'styled-components';

import Title from '../../components/TitleIcon';
import DropDownItems from '../../compositions/ClickableDropDownItems';
import { useStateValue } from '../../utils/context';
import { createQueryRenderer, graphql } from '../../utils/relay';
import theme from '../../utils/theme';

const MATERIAL_TYPES = ['all', 'software', 'hardware', 'teaching', 'research data', 'artistic', 'others'];

const TitleBox = styled.div`
  font-size: 40px;
  width: 368px;
  height: 190px;
  margin: 40px 0px 0px 97px;
  color: ${theme.palette.primary[800]};
`;

const MenuBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomePage = () => {
  const { t } = useStateValue();
  return (
    <>
      <TitleBox>{t('homePage.title')}</TitleBox>
      <MenuBox>
        <Title title={t('homePage.menuTitle')} link="/create" />
      </MenuBox>
      <DropDownItems
        items={MATERIAL_TYPES.map(materialType => ({
          text: t(`type.${materialType}`),
          link: `/materials/${materialType}`,
        }))}
      />
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
