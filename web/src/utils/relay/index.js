// eslint-disable
import PubSub from 'pubsub-js';
import { commitMutation as commit } from 'react-relay';
import { checkErrorOnArray } from '../error';

export { graphql } from 'react-relay';
export { fetchQuery } from 'relay-runtime';
export { createFragmentContainer, createPaginationContainer, createRefetchContainer } from 'react-relay';

export { default as createQueryRenderer } from './createQueryRenderer';
export { default as createPaginationRenderer } from './createPaginationRenderer';

export { default as environment } from './createRelayEnvironment';

export const CONNECTION_VARIABLES = { first: 10, filtered: [], sorted: [] };

export const offsetToCursor = str => Buffer.from(`${str}`).toString('base64');

export function commitMutation(environment, { loading = true, ...config }) {
  if (loading) {
    PubSub.publish('loading.start');
  }
  return commit(environment, {
    ...config,
    onCompleted: res => {
      if (loading) {
        PubSub.publish('loading.stop');
      }
      if (config.onCompleted) {
        config.onCompleted(res);
      }
    },
    onError: error => {
      if (loading) {
        PubSub.publish('loading.stop');
      }
      if (config.onError) {
        config.onError(error);
      }
      if (checkErrorOnArray(error, ['event-unavailable'])) {
        window.location = '/#/error';
      }
    },
  });
}

export const getEdgeById = (connection, id) => connection.edges.find(({ node }) => node.id === id);
