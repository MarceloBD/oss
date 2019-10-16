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
  height: 100%;
`;

const ToVoteBox = styled.div`
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${theme.palette.primary.default};
  color: ${theme.palette.background.default};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Vote = ({ number, size }) => {
  const { t } = useStateValue();

  return (
    <VoteBox>
      <div>{t('vote.votes')}</div>
      <div>{number}</div>
      <Clickable>
        <ToVoteBox size={size}>{t('vote.vote')}</ToVoteBox>
      </Clickable>
    </VoteBox>
  );
};

Vote.propTypes = {
  number: PropTypes.number.isRequired,
  size: PropTypes.number,
};

Vote.defaultProps = {
  size: theme.spacing.unit(10),
};

export default Vote;
