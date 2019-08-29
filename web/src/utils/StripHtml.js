import PropTypes from 'prop-types';
import React from 'react';
import Dotdotdot from 'react-dotdotdot';
import styled from 'styled-components';

const StripHtmlBox = styled.div`
  word-break: break-word;
`;

const StripHtml = ({ children, clamp }) => {
  const temporalDivElement = document.createElement('div');
  temporalDivElement.innerHTML = children;
  return (
    <>
      {clamp ? (
        <StripHtmlBox>
          <Dotdotdot clamp={clamp}>{temporalDivElement.textContent || temporalDivElement.innerText || ''}</Dotdotdot>
        </StripHtmlBox>
      ) : (
        <>{temporalDivElement.textContent || temporalDivElement.innerText || ''}</>
      )}
    </>
  );
};

StripHtml.propTypes = {
  children: PropTypes.string,
  clamp: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

StripHtml.defaultProps = {
  children: null,
  clamp: false,
};

export default StripHtml;
