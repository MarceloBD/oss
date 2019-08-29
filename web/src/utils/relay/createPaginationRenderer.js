import { createPaginationContainer, createQueryRenderer } from './index';

export default ({ Component, connectionFromProps, fragmentQuery, paginationQuery, configQueryRenderer }) =>
  createQueryRenderer(
    createPaginationContainer(Component, fragmentQuery, {
      direction: 'forward',
      getConnectionFromProps(props) {
        return connectionFromProps(props);
      },
      getFragmentVariables(prevVars, totalCount) {
        return {
          ...prevVars,
          count: totalCount,
        };
      },
      getVariables(props, { count, cursor }, fragmentVariables) {
        return {
          count,
          cursor,
          globalId: fragmentVariables.globalId,
        };
      },
      query: paginationQuery,
    }),
    configQueryRenderer,
  );
