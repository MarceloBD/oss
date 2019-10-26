import { withRouter } from 'found';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { checkError } from '../utils/error';

const Error = ({ errors, component, match }) => {
  useEffect(() => {
    if (!component) {
      if (checkError(errors, 'unauthenticated')) {
        window.location = `${process.env.PORTAL_URL}/#/login?redirect=${encodeURIComponent(
          match.location.pathname,
        )}&baseurl=${process.env.PORTAL_URL}`;
      } else if (checkError(errors, 'unauthorized')) {
        window.location = `/#/`;
      } else if (checkError(errors, 'no_enrollment')) {
        window.location = '/#/no-enrollment';
      } else if (checkError(errors, 'trial_ended')) {
        window.location = '/#/';
      } else if (checkError(errors, 'metric-unavailable')) {
        window.location = '/#/error';
      } else if (checkError(errors, 'NetworkError when attempting to fetch resource.')) {
        throw Error('graphql-unreachable');
      } else if (checkError(errors, 'Failed to fetch')) {
        throw Error('graphql-unreachable');
      } else {
        console.table(errors);
      }
    }
  });
  return <div>{component}</div>;
};

Error.propTypes = {
  errors: PropTypes.array.isRequired,
  component: PropTypes.object,
  match: PropTypes.object.isRequired,
};

Error.defaultProps = {
  component: null,
};

export default withRouter(Error);
