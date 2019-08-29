import { css } from 'styled-components';

const sizes = {
  desktop: 873,
  phone: 872,
  // tablet: 768,
  // phone: 576,
};

// Iterate through the sizes and create a media template
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (${label === 'desktop' ? 'min-' : 'max-'}width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
