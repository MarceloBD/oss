import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Clickable from '../elements/Clickable';
import { useStateValue } from '../utils/context';
import theme from '../utils/theme';

const VoteBox = styled.div`
  background: ${theme.palette.secondary[800]};
  color: ${theme.palette.background.default};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: ${theme.border.radius};
`;

const ToVoteBox = styled.div`
  border-radius: 50%;
  width: ${theme.spacing.unit(10)};
  height: ${theme.spacing.unit(10)};
  background: ${theme.palette.primary.default};
  color: ${theme.palette.background.default};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Vote = ({ number }) => {
  const { t } = useStateValue();

  return (
    <VoteBox>
      <div>{t('vote.votes')}</div>
      <div>{number}</div>
      <Clickable>
        <ToVoteBox>{t('vote.vote')}</ToVoteBox>
      </Clickable>
    </VoteBox>
  );
};

Vote.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Vote;
