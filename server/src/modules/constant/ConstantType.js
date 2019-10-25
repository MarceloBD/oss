import { GraphQLList, GraphQLString } from 'graphql';
import get from 'lodash/get';

import knex from '../../utils/knex';
import { TYPES } from '../material/MaterialType';
import { registerGraphQLNodeObjectType } from '../node/NodeType';

const DOMAIN_TYPES = [
  'History, Languages and Linguistics',
  'Literature',
  'Performing Arts',
  'Philosophy',
  'Religion',
  'Visual Arts',
  'Anthropology',
  'Archaeology',
  'Area Studies',
  'Cultural and ethnic studies',
  'Economics',
  'Gender and sexuality studies',
  'Geography',
  'Political science',
  'Psychology',
  'Sociology',
  'Space sciences',
  'Earth sciences',
  'Life sciences',
  'Chemistry',
  'Physics',
  'Computer sciences',
  'Logic',
  'Mathematics',
  'Statistics',
  'System science',
  'Agriculture',
  'Architecture and design',
  'Business',
  'Divinity',
  'Education',
  'Engineering',
  'Environmental studies and Forestry',
  'Family and consumer science',
  'Health sciences',
  'Human physical performance and recreation',
  'Journalism, media studies and communication',
  'Law',
  'Library and museum studies',
  'Military sciences',
  'Public administration',
  'Social work',
  'Transportation',
];

const SOURCE_TYPES = ['Personal', 'Academic', 'Commerce/Industry', 'Government/Military', 'Others'];

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
    domainTypes: {
      type: new GraphQLList(GraphQLString),
      resolve: async () => {
        const materials = await knex('domain_type_count');
        console.log(materials);
        return DOMAIN_TYPES.concat(materials.map(material => material.domain_name.toLowerCase()));
      },
    },
    sourceTypes: {
      type: new GraphQLList(GraphQLString),
      resolve: async () => SOURCE_TYPES,
    },
    licenseTypes: {
      type: new GraphQLList(GraphQLString),
      resolve: async () => {
        const materials = await knex('license_type_count');
        return materials.map(material => material.name);
      },
    },
  }),
});

export default ConstantType;
