import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { createQueryRenderer, graphql } from 'utils/relay';

import Title from '../../components/TitleIcon';
import MaterialsList from '../../compositions/ItemsList';
import theme from '../../utils/theme';

const TitleBox = styled.div`
  margin: 33px 0px 0px 87px;
`;

const MaterialListBox = styled.div`
  margin: ${theme.spacing.unit(2)} 128px;
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
            description: material.description,
            vote: 0,
            type: material.type,
            id: material.id,
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
    query MaterialsListPageQuery($materialType: String!) {
      system {
        posts(type: $materialType) {
          edges {
            node {
              material {
                id
                name
                description
                type
              }
            }
          }
        }
      }
    }
  `,
  queriesParams: props => ({ materialType: props.match.params.materialType }),
});
