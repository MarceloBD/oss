import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

import MainItem from '../elements/ClickableBigItem';
import SubItem from '../elements/ClickableSmallItem';
import theme from '../utils/theme';

const DropDownItemBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const animation = keyframes`0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
}`;

const animation2 = keyframes`0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
}`;

const SubItemStyled = styled(SubItem)`
  margin-top: 10px;
  display: flex;
  ${props =>
    props.dropdown
      ? css`
          animation: ${animation} 2s 0s 1;
          opacity: 1;
        `
      : css`
          animation: ${animation2} 2s 0s 1;
          opacity: 0;
        `}
`;

const DropDownItem = ({ text }) => {
  const [dropdown, setDropDown] = useState(false);

  return (
    <DropDownItemBox>
      <MainItem text={text} onClick={() => setDropDown(!dropdown)} />
      {true && (
        <>
          <SubItemStyled text={text} dropdown={dropdown} />
        </>
      )}
    </DropDownItemBox>
  );
};

DropDownItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default DropDownItem;
