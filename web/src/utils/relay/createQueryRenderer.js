import { withRouter } from 'found';
import React from 'react';
import { QueryRenderer } from 'react-relay';

import Error from '../../components/Error';
import ErrorBoundary from '../../components/ErrorBoundary';
import environment from './createRelayEnvironment';

export default function createQueryRenderer(FragmentComponent, config) {
  const { query, queriesParams, variables, loader, errorComponent } = config;
  const QueryRendererWrapper = wrapperProps => {
    const queryVariables = queriesParams ? queriesParams(wrapperProps) : variables;
    console.log(config);
    return (
      <ErrorBoundary>
        <QueryRenderer
          query={query}
          variables={queryVariables}
          environment={environment}
          render={({ props, error }) => {
            if (error) {
              const errors = error instanceof Array ? error : [error];
              return <Error errors={errors} component={errorComponent} />;
            }
            if (props) {
              return <FragmentComponent {...wrapperProps} {...props} relay={{ environment }} />;
            }
            return loader;
          }}
        />
      </ErrorBoundary>
    );
  };
  return withRouter(QueryRendererWrapper);
}
