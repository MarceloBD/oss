import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Item from '../components/ClickableListItem';
import theme from '../utils/theme';

const ItemsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${theme.spacing.unit(1)};
`;

const ItemBox = styled.div`
  margin-bottom: 20px;
`;

const BoxTitle = styled.div`
  flex: ${props => props.flex};
  text-align: center;
`;

const ColumnTitlesBox = styled.div`
  display: flex;
  width: 100%;
`;

const AttributesTitleBox = styled.div`
  flex: 4;
  display flex;
`;

const ItemList = ({ items }) => (
  <>
    <ColumnTitlesBox>
      <BoxTitle flex={6}>Materiais</BoxTitle>
      <AttributesTitleBox>
        <BoxTitle flex={1}>Tipo</BoxTitle>
        <BoxTitle flex={1}>Votos</BoxTitle>
      </AttributesTitleBox>
    </ColumnTitlesBox>
    <ItemsBox>
      {items.map((item, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <ItemBox key={idx}>
          <Item item={item} link={`/material/${item.id}`} />
        </ItemBox>
      ))}
    </ItemsBox>
  </>
);

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;
