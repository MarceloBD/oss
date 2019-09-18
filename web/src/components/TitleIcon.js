import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Plus from '../assets/icons/Plus';
import ClickableIcon from '../elements/ClickableIcon';
import theme from '../utils/theme';

const TitleIconBox = styled.div`
  display: flex;
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

const TitleIcon = ({ title, ...props }) => (
  <TitleIconBox {...props}>
    <MenuTitle>{title}</MenuTitle>
    <ClickableIconBox>
      <ClickableIcon icon={<Plus />} />
    </ClickableIconBox>
  </TitleIconBox>
);

TitleIcon.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleIcon;
