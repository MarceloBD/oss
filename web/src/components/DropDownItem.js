import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

import MainItem from '../elements/ClickableBigItem';
import SubItem from '../elements/ClickableSmallItem';

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
          animation: ${animation} 1s 0s 1;
          opacity: 1;
        `
      : css`
          animation: ${animation2} 1s 0s 1;
          opacity: 0;
        `}
`;

const DropDownItem = ({ text, link, ...props }) => {
  const [dropdown, setDropDown] = useState(false);

  return (
    <DropDownItemBox {...props}>
      <MainItem text={text} onClick={() => setDropDown(!dropdown)} />
      {dropdown && (
        <>
          <SubItemStyled text={text} dropdown={dropdown} link={link} />
        </>
      )}
    </DropDownItemBox>
  );
};

DropDownItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default DropDownItem;
