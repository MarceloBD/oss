import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { createQueryRenderer, graphql, createRefetchContainer } from 'utils/relay';

import Pagination from '../../components/Pagination';
import Title from '../../components/TitleIcon';
import MaterialsList from '../../compositions/ItemsList';
import theme from '../../utils/theme';

const INITIAL_COMMENTS_PER_PAGE = 15;

const TitleBox = styled.div`
  margin: 33px 0px 0px 87px;
`;

const MaterialListBox = styled.div`
  margin: ${theme.spacing.unit(2)} 128px;
`;

const Footer = styled.div`
  height: auto;
  margin-bottom: 35px;
`;

const NewMaterialsPage = ({ system, relay }) => {
  const { t } = useTranslation();
  const [selectedPage, setSelectedPage] = useState(1);
  const [commentsPerPage, setCommentsPerPage] = useState(INITIAL_COMMENTS_PER_PAGE);

  const onFetchData = page => {
    const variables = {
      first: commentsPerPage,
      page,
    };
    relay.refetch(variables, null, () => {});
  };

  useEffect(() => {
    if (selectedPage) {
      onFetchData(selectedPage);
    }
  }, [selectedPage, commentsPerPage]);

  useEffect(() => {
    document.title = 'Lista de materiais';
  }, []);

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
            vote: material.post.votes,
            type: material.type,
            id: material.id,
          }))}
        />
      </MaterialListBox>
      <Footer>
        {system.posts && system.posts.count > 0 && (
          <Pagination
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            totalPages={Math.ceil(system.posts.count / commentsPerPage)}
            commentsPerPage={commentsPerPage}
            setCommentsPerPage={setCommentsPerPage}
          />
        )}
      </Footer>
    </>
  );
};

NewMaterialsPage.propTypes = {
  system: PropTypes.object.isRequired,
};

const NewMaterialsPageRefetch = createRefetchContainer(
  NewMaterialsPage,
  graphql`
    fragment NewMaterialsPage_system on System {
      posts(type: $materialType, first: $first, page: $page, staff: true) {
        count
        edges {
          node {
            material {
              id
              name
              description
              type
              post {
                votes
              }
            }
          }
        }
      }
    }
  `,
  graphql`
    query NewMaterialsPageRefetchQuery($materialType: String!, $first: Int!, $page: Int!) {
      system {
        ...NewMaterialsPage_system
      }
    }
  `,
);

export default createQueryRenderer(NewMaterialsPageRefetch, {
  query: graphql`
    query NewMaterialsPageQuery($materialType: String!, $first: Int!, $page: Int!) {
      system {
        ...NewMaterialsPage_system
      }
      viewer(hasUser: true, hasStaff: true) {
        id
      }
    }
  `,
  queriesParams: () => ({
    materialType: 'all',
    first: INITIAL_COMMENTS_PER_PAGE,
    page: 1,
  }),
});
