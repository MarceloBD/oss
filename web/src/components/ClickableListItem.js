import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Clickable from '../elements/Clickable';
import theme from '../utils/theme';

const ClickableListItemBox = styled.div`
  width: 100%;
  height: 111px;
  border: 1px solid ${theme.palette.primary[800]};
  display: flex;
  border-radius: 5px;
`;

const MainInfoBox = styled.div`
  flex: 6;
`;

const TitleBox = styled.div`
  margin: 10px;
`;

const DescriptionBox = styled.div`
  margin: 10px;
`;

const AttributesBox = styled.div`
  flex: 4;
  display: flex;
`;

const Box = styled.div`
  border-left: 1px solid ${theme.palette.primary[800]};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
`;

const ClickableListItem = ({ item, link }) => (
  <Clickable link={link}>
    <ClickableListItemBox>
      <MainInfoBox>
        <TitleBox>{item.title}</TitleBox>
        <DescriptionBox>{item.description}</DescriptionBox>
      </MainInfoBox>
      <AttributesBox>
        <Box>{item.type.toLowerCase()}</Box>
        <Box>{item.vote}</Box>
      </AttributesBox>
    </ClickableListItemBox>
  </Clickable>
);

ClickableListItem.propTypes = {
  item: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
};

export default ClickableListItem;
