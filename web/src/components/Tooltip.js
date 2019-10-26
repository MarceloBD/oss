import PropTypes from 'prop-types';
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const TooltipBox = styled.div`
  position: relative;
  display: initial;
`;

const ChildrenBox = styled.div`
  display: initial;
`;

const TipBox = styled.div`
  position: absolute;
  display: flex;
  top: -25px;
  opacity: 0;
  background: rgb(0, 0, 0, 0.7);
  color: white;
  padding: 2px 10px;
  border-radius: 10px;
  width: max-content;
  left: ${props => props.horizontalPosition}px;
  ${TooltipBox}:hover & {
    opacity: 1;
  }
`;

const Tooltip = ({ children, text }) => {
  const ChildrenBoxRef = useRef();
  const TipBoxRef = useRef();
  const [tipboxHorizontalPosition, setTipBoxHorizontalPosition] = useState(0);
  console.log(ChildrenBoxRef.current ? ChildrenBoxRef.current.offsetWidth : ChildrenBoxRef);
  console.log(TipBoxRef.current ? TipBoxRef.current : TipBoxRef);

  useEffect(
    () =>
      ChildrenBoxRef.current && TipBoxRef.current
        ? setTipBoxHorizontalPosition(ChildrenBoxRef.current.offsetWidth / 2 - TipBoxRef.current.offsetWidth / 2)
        : null,
    [ChildrenBoxRef, TipBoxRef],
  );

  return (
    <TooltipBox>
      <TipBox horizontalPosition={tipboxHorizontalPosition} ref={TipBoxRef}>
        {text}
      </TipBox>
      <ChildrenBox ref={ChildrenBoxRef}> {children}</ChildrenBox>
    </TooltipBox>
  );
};

Tooltip.propTypes = { children: PropTypes.object.isRequired, text: PropTypes.string.isRequired };

export default Tooltip;
