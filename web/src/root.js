import { Actions as FarceActions, HashProtocol, createHistoryEnhancer, queryMiddleware } from 'farce';
import { Matcher, createConnectedRouter, createMatchEnhancer, createRender, foundReducer as found } from 'found';
import { Resolver } from 'found-relay';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, compose, createStore } from 'redux';

import ErrorBoundary from './components/ErrorBoundary';
import GlobalStyle from './globalStyle';
import routes from './routes';
import environment from './utils/relay/createRelayEnvironment';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //eslint-disable-line

const store = createStore(
  combineReducers({ found }),
  composeEnhancers(
    createHistoryEnhancer({
      protocol: new HashProtocol(),
      middlewares: [queryMiddleware],
    }),
    createMatchEnhancer(new Matcher(routes)),
  ),
);
store.dispatch(FarceActions.init());

const Router = createConnectedRouter({
  render: createRender({
    renderError() {
      return <div>Error</div>;
    },
  }),
});

const Root = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <>
          <GlobalStyle />
          <Router resolver={new Resolver(environment)} />
        </>
      </Provider>
    </ErrorBoundary>
  );
};

export default Root;
