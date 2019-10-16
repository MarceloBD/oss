import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const TagContentBox = styled.div`
  border: 1px solid ${theme.palette.primary[200]};
  border-radius: ${theme.border.radius};
  height: 100%;
`;

const TagBox = styled.div`
  width: 50%;
  background: ${theme.palette.secondary[600]};
  color: ${theme.palette.background.default};
  padding: ${theme.spacing.unit(1)} ${theme.spacing.unit(2)};
  box-sizing: border-box;
  border-radius: ${theme.border.radius} 0px ${theme.border.radius} 0px;
`;

const ContentBox = styled.div`
  padding: ${theme.spacing.unit(2)};
`;

const TagContent = ({ tag, content }) => (
  <TagContentBox>
    <TagBox>{tag} </TagBox> <ContentBox> {content}</ContentBox>
  </TagContentBox>
);

TagContent.propTypes = {
  tag: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default TagContent;
