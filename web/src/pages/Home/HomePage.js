import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Plus from '../../assets/icons/Plus';
import DropDownItems from '../../compositions/ClickableDropDownItems';
import ClickableIcon from '../../elements/ClickableIcon';
import isLoaded from '../../utils/isLoaded';
import { createQueryRenderer, graphql } from '../../utils/relay';
import theme from '../../utils/theme';

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

const MenuTitle = styled.div`
  font-size: 30px;
  color: ${theme.palette.primary[800]};
`;

const ClickableIconBox = styled.div`
  fill: ${theme.palette.primary.default};
  display: contents;
  svg {
    margin: 2px 0px 0px 10px;
  }
`;

const HomePage = () => {
  const { t, i18n } = useTranslation();
  if (!isLoaded(i18n)) return <></>;
  return (
    <>
      <TitleBox>{t('homePage.title')}</TitleBox>
      <MenuBox>
        <MenuTitle>{t('homePage.menuTitle')}</MenuTitle>
        <ClickableIconBox>
          <ClickableIcon icon={<Plus />} />
        </ClickableIconBox>
      </MenuBox>
      <DropDownItems items={[{ text: 'hardware' }, { text: 'software' }, { text: 'escritos' }]} />
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
