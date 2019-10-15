import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { createQueryRenderer, graphql } from 'utils/relay';

import ItemBox from '../../components/TagContent';
import Vote from '../../components/Vote';
import { useStateValue } from '../../utils/context';
import theme from '../../utils/theme';

const TitleBox = styled.div`
  color: ${theme.palette.primary.default};
  font-size: 30px;
`;

const MaterialBox = styled.div`
  margin-top: 17px;
  border: 1px solid ${theme.palette.primary[200]};
  display: flex;
  border-radius: ${theme.border.radius};
  padding: ${theme.spacing.unit(2)};
  box-sizing: border-box;
`;

const DescriptionAttributeAuthorBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

const AtributeAuthorBox = styled.div`
  margin-top: ${theme.spacing.unit(3)};
  display: flex;
`;

const AttributeBox = styled.div`
  flex: 2;
`;

const AttributeTag = styled.div``;

const AuthorsBox = styled.div`
  flex: 1;
`;

const VoteLinkReferenceBox = styled.div`
  flex: 1;
`;

const VotesBox = styled.div``;
const LinkBox = styled.div`
  margin-top: ${theme.spacing.unit(3)};
`;

const ReferencesBox = styled.div`
  margin-top: ${theme.spacing.unit(3)};
`;

const MaterialPage = ({ material }) => {
  const { t } = useStateValue();
  return (
    <>
      <TitleBox>{material.name}</TitleBox>
      <MaterialBox>
        <DescriptionAttributeAuthorBox>
          <ItemBox tag={t('materialPage.description')} content="text" />
          <AtributeAuthorBox>
            <AttributeBox>
              <AttributeTag>Atributo</AttributeTag>
            </AttributeBox>
            <AuthorsBox>
              <ItemBox tag={t('materialPage.authors')} content="text " />
            </AuthorsBox>
          </AtributeAuthorBox>
        </DescriptionAttributeAuthorBox>
        <VoteLinkReferenceBox>
          <VotesBox>
            <Vote number={40} />
          </VotesBox>
          <LinkBox>
            <ItemBox tag={t('materialPage.link')} content="text " />
          </LinkBox>
          <ReferencesBox>
            <ItemBox tag={t('materialPage.references')} content="text " />
          </ReferencesBox>
        </VoteLinkReferenceBox>
      </MaterialBox>
    </>
  );
};

MaterialPage.propTypes = {
  material: PropTypes.object.isRequired,
};

export default createQueryRenderer(MaterialPage, {
  query: graphql`
    query MaterialPageQuery($globalId: ID!) {
      material: node(id: $globalId) {
        ... on Material {
          id
          name
        }
      }
    }
  `,
  queriesParams: props => ({ globalId: props.match.params.materialId }),
});
