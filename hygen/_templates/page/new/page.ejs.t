---
to: ../moody/src/pages/<%= name %>Page.js
---
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
<% if(hasQueryRenderer == 'y') { -%>

import { createQueryRenderer, graphql } from 'utils/relay';
<% } -%>

<% if(component == 'react'){ -%>
class <%= name %>Page extends React.Component {
  render() {    
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}
<%= name %>Page.propTypes = {
};<% } -%>
<% if(component == 'pure'){ -%>

const <%= name %>Page = ({}) => (
  <React.Fragment>
  </React.Fragment>
);<% } -%><% if(hasQueryRenderer == 'y') { -%> 
export default createQueryRenderer(<%= name %>Page, {
  query: graphql`
  query <%= name %>PageQuery() {
  }
  `,
  queriesParams: props => ({}),
});
<% } else { -%>

export default <%= name %>Page;
<% } -%>
