import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Item from '../components/ClickableListItem';

const ItemsBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemBox = styled.div`
  margin-bottom: 20px;
`;

const BoxTitle = styled.div``;

const ItemList = ({ items }) => (
  <>
    <BoxTitle>Tipo</BoxTitle>
    <BoxTitle>Votos</BoxTitle>
    <ItemsBox>
      {items.map((item, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <ItemBox key={idx}>
          <Item item={item} />
        </ItemBox>
      ))}
    </ItemsBox>
  </>
);

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ItemList;
