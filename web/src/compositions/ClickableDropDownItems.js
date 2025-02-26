import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import DropDownItem from '../components/DropDownItem';

const ClickableDropDownItemsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const DropDownItemStyled = styled(DropDownItem)`
  margin: 40px;
`;

const ClickableDropDownItems = ({ items }) => (
  <ClickableDropDownItemsBox>
    {items.map((item, idx) => (
      // eslint-disable-next-line react/no-array-index-key
      <DropDownItemStyled text={item.text} key={idx} link={item.link} />
    ))}
  </ClickableDropDownItemsBox>
);

ClickableDropDownItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ClickableDropDownItems;
