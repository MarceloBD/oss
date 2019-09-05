import React from 'react';

import { createQueryRenderer, graphql } from '../../utils/relay';

const HomePage = () => <>Teste</>;

export default createQueryRenderer(HomePage, {
  query: graphql`
    query HomePageQuery {
      viewer {
        id
      }
    }
  `,
});
