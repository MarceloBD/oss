import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { createQueryRenderer, graphql } from 'utils/relay';

import ItemBox from '../../components/TagContent';
import Vote from '../../components/Vote';
import Clickable from '../../elements/Clickable';
import SendAccessedPostMutation from '../../modules/post/mutations/SendAccessedPostMutation';
import UnvoteMutation from '../../modules/vote/mutations/UnvoteMutation';
import VoteMutation from '../../modules/vote/mutations/VoteMutation';
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
  padding: ${theme.spacing.unit(2)};
  box-sizing: border-box;
`;

const DescriptionBox = styled.div`
  min-height: ${theme.spacing.unit(40)};
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
  margin-left: ${theme.spacing.unit(2)};
`;

const VoteLinkReferenceBox = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const VotesBox = styled.div`
  width: 100%;
  max-width: ${theme.spacing.unit(35)};
  height: ${props => props.height}px;
`;
const LinkBox = styled.div`
  margin-top: ${theme.spacing.unit(3)};
  width: 100%;
`;

const ReferencesBox = styled.div`
  margin-top: ${theme.spacing.unit(3)};
  width: 100%;
`;

const MaterialPage = ({ material, match }) => {
  const { t } = useStateValue();
  const [voteBoxHeight, setVoteBoxHeight] = useState();

  const voteBoxRef = useRef();

  const vote = () => VoteMutation.commit({ variables: { materialGlobalId: match.params.materialId } });
  const unvote = () => UnvoteMutation.commit({ variables: { materialGlobalId: match.params.materialId } });

  useEffect(() => setVoteBoxHeight(voteBoxRef.current.offsetWidth), [voteBoxRef]);

  window.addEventListener('resize', () => {
    setVoteBoxHeight(voteBoxRef.current.offsetWidth);
  });

  useEffect(() => SendAccessedPostMutation.commit({ variables: { materialGlobalId: match.params.materialId } }), []);

  return (
    <>
      <TitleBox>{material.name}</TitleBox>
      <MaterialBox>
        <DescriptionAttributeAuthorBox>
          <DescriptionBox>
            <ItemBox tag={t('materialPage.description')} content={material.description} />
          </DescriptionBox>

          <AtributeAuthorBox>
            <AttributeBox>
              <ItemBox
                tag={t('materialPage.atribute')}
                content={
                  <>
                    <AttributeTag>Lingua - {material.language}</AttributeTag>
                    <AttributeTag>Fonte - {material.source}</AttributeTag>
                    <AttributeTag>Id - {material.osid}</AttributeTag>
                    <AttributeTag>
                      License - {material.license.name} {material.license.version}
                    </AttributeTag>
                    <AttributeTag>Área - {material.domain}</AttributeTag>
                    <AttributeTag>Hash - {material.hash}</AttributeTag>
                    <AttributeTag>Tipo - {material.type}</AttributeTag>
                  </>
                }
              />
            </AttributeBox>
            <AuthorsBox>
              <ItemBox
                tag={t('materialPage.authors')}
                content={material.authors.edges.map(({ node: author }) => author.name)}
              />
            </AuthorsBox>
          </AtributeAuthorBox>
        </DescriptionAttributeAuthorBox>
        <VoteLinkReferenceBox>
          <Clickable onClick={material.post.isVoted ? unvote : vote}>
            <VotesBox ref={voteBoxRef} height={voteBoxHeight}>
              <Vote number={material.post.votes} size={(voteBoxHeight * 2) / 5} unvote={material.post.isVoted} />
            </VotesBox>
          </Clickable>
          <LinkBox>
            <ItemBox
              tag={t('materialPage.link')}
              content={
                <a href={material.url} target="_blank" rel="noopener noreferrer">
                  {material.url}
                </a>
              }
            />
          </LinkBox>
          <ReferencesBox>
            <ItemBox tag={t('materialPage.references')} content="" />
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
          description
          language
          url
          source
          osid
          type
          domain
          hash
          license {
            name
            version
          }
          post {
            votes
            isVoted
          }
          authors {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }
    }
  `,
  queriesParams: props => ({ globalId: props.match.params.materialId }),
});
