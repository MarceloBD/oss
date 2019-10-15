import { GraphQLObjectType } from 'graphql';
import { fromGlobalId, globalIdField, nodeDefinitions } from 'graphql-relay';

import photon from '../../utils/photon';

const isFunction = object => typeof object === 'function';
const registeredTypes = {};
const getters = {};

const getNode = async (type, id, user) => {
  if (isFunction(getters[type])) {
    const obj = await getters[type]({ id, user });
    if (obj) return { ...obj, nodeType: type };
  }
  const [result] = await photon[`${type}s`]({ where: { id } });
  return { ...result, nodeType: type };
};

const { nodeInterface, nodeField: NodeType } = nodeDefinitions(
  async (globalId, { user }) => {
    const { type, id } = fromGlobalId(globalId);
    if (type) {
      return getNode(type, parseInt(id, 10), user);
    }
    return null;
  },
  object => registeredTypes[object.nodeType] || null,
);

const getInterfacesWithJNode = interfaces => {
  if (interfaces) {
    return () => (isFunction(interfaces) ? [...interfaces(), nodeInterface] : [...interfaces, nodeInterface]);
  }
  return () => [nodeInterface];
};

export const registerGraphQLNodeObjectType = (table, getter = null) => config => {
  const type = new GraphQLObjectType({
    ...config,
    fields: () => ({
      ...(isFunction(config.fields) ? config.fields() : config.fields),
      id: globalIdField(table),
    }),
    interfaces: getInterfacesWithJNode(config.interfaces),
  });
  registeredTypes[table] = type;
  getters[table] = getter;
  return type;
};

export { registeredTypes, nodeInterface };

export default NodeType;
