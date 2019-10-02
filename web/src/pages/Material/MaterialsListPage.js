import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { createQueryRenderer, graphql } from 'utils/relay';

import Title from '../../components/TitleIcon';
import MaterialsList from '../../compositions/ItemsList';

const TitleBox = styled.div`
  margin: 33px 0px 0px 87px;
`;

const MaterialListBox = styled.div`
  margin: 0px 128px;
`;

const MaterialsListPage = ({ system }) => {
  const { t } = useTranslation();
  return (
    <>
      <TitleBox>
        <Title title={t('homePage.menuTitle')} link="/create" />
      </TitleBox>
      <MaterialListBox>
        <MaterialsList
          items={system.posts.edges.map(({ node: { material } }) => ({
            title: material.name,
            description: 'tsete',
            vote: 10,
            type: material.type,
          }))}
        />
      </MaterialListBox>
    </>
  );
};

MaterialsListPage.propTypes = {
  system: PropTypes.object.isRequired,
};

export default createQueryRenderer(MaterialsListPage, {
  query: graphql`
    query MaterialsListPageQuery {
      system {
        posts {
          edges {
            node {
              material {
                name
                type
              }
            }
          }
        }
      }
    }
  `,
});
