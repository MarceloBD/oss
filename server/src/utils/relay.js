import { fromGlobalId } from 'graphql-relay';

export const fromGlobalToId = globalID => parseInt(fromGlobalId(globalID).id, 10);
