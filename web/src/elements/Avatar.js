import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';
import Clickable from './Clickable';
import AvatarIcon from '../assets/icons/Avatar';

const AvatarBox = styled.div`
  background-color: ${theme.palette.primary[400]};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const AvatarIconStyled = styled(AvatarIcon)`
  fill: ${theme.palette.background.default};
`;

const Avatar = ({ link, ...props }) => {
  return (
    <Clickable link={link}>
      <AvatarBox {...props}>
        <AvatarIconStyled />
      </AvatarBox>
    </Clickable>
  );
};
Avatar.propTypes = {
  link: PropTypes.string.isRequired,
};
export default Avatar;
