import { GraphQLList, GraphQLString } from 'graphql';
import get from 'lodash/get';

import knex from '../../utils/knex';
import { TYPES } from '../material/MaterialType';
import { registerGraphQLNodeObjectType } from '../node/NodeType';

const ConstantType = registerGraphQLNodeObjectType('constant')({
  name: 'Constant',
  fields: () => ({
    materialTypes: {
      type: new GraphQLList(GraphQLString),
      resolve: async () => {
        const materials = await knex('material_type_count');
        return Object.keys(TYPES).concat(
          materials.map(material => material.type.toLowerCase()).filter(type => !get(TYPES, type, false)),
        );
      },
    },
  }),
});

export default ConstantType;
