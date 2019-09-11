---
to: ../moody/src/components/<%= path %>/<%= name %>.js
---
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
<% if(hasQueryRenderer == 'y') { -%>

import { createQueryRenderer, graphql } from 'utils/relay';
<% } -%>

<% if(component == 'react'){ -%>
class <%= name %> extends React.Component {
  render() {
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}
<%= name %>.propTypes = {
};<% } -%>
<% if(component == 'pure'){ -%>

const <%= name %> = ({}) => (
  <React.Fragment>
  </React.Fragment>
);<% } -%>
<% if(hasQueryRenderer == 'y') { -%> 
export default createQueryRenderer(<%= name %>, {
  query: graphql`
  query <%= name %>Query() {
  }
  `,
  queriesParams: props => ({}),
});
<% } else { -%>

export default <%= name %>;
<% } -%>
