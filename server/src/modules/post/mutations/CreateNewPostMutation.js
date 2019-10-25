import { GraphQLString, GraphQLList } from 'graphql';
import { mutationWithClientMutationId } from 'graphql-relay';
import get from 'lodash/get';
import moment from 'moment-timezone';

import { TYPES } from '../../material/MaterialType';
import knex from '../../../utils/knex';

export const createNewPost = async (
  { clientMutationId, title, description, language, url, type, hash, domain, license, licenseVersion, source, authors },
  context,
) => {
  const othersId = TYPES.others;
  const typeId = get(TYPES, type.toLowerCase(), TYPES.others);

  const isOthersType = () => othersId === typeId;

  const getCount = resp => {
    let count = 0;
    const typeRow = resp.filter(row => row.type === type);
    if (typeRow.length) {
      // eslint-disable-next-line prefer-destructuring
      count = typeRow[0].count;
    }
    if (isOthersType()) {
      const mainTypes = resp.filter(
        row => !get(TYPES, row.type.toLowerCase(), false) || row.type.toLowerCase() === 'others',
      );
      count = mainTypes.reduce((acc, mainRow) => parseInt(mainRow.count, 10) + acc, 0);
    }
    return count;
  };
  await knex.transaction(trx => {
    knex('material_type_count')
      .transacting(trx)
      .then(async resp => {
        const count = getCount(resp);
        const post = await context.photon.posts.create({
          data: {
            material: {
              create: {
                name: title,
                description,
                language,
                url,
                type: type.toUpperCase(),
                hash,
                openSourceId: `${moment().format('YYYY')}.${typeId}.${parseInt(count, 10) + 1}`,
                domainName: domain,
                license: { create: { name: license, version: licenseVersion } },
                sourceType: source,
              },
            },
            user: { connect: { id: context.user.id } },
          },
        });

        const material = await context.photon.posts.findOne({ where: { id: post.id } }).material();

        const createAuthors = await authors.map(async author => {
          const userId = author === 'myself' ? context.user.id : author;
          const newAuthor = await context.photon.authors.create({
            data: {
              user: {
                connect: {
                  id: parseInt(userId, 10),
                },
              },
            },
          });

          await context.photon.materialAuthors.create({
            data: {
              author: {
                connect: { id: newAuthor.id },
              },
              material: {
                connect: { id: material.id },
              },
            },
          });
        });
        Promise.all(createAuthors);
      })
      .then(trx.commit)
      .catch(trx.rollback);
  });

  return { clientMutationId };
};

export default mutationWithClientMutationId({
  name: 'CreateNewPostMutation',
  inputFields: {
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    language: { type: GraphQLString },
    url: { type: GraphQLString },
    type: { type: GraphQLString },
    domain: { type: GraphQLString },
    license: { type: GraphQLString },
    licenseVersion: { type: GraphQLString },
    source: { type: GraphQLString },
    authors: { type: new GraphQLList(GraphQLString) },
    hash: { type: GraphQLString },
  },
  outputFields: {},
  mutateAndGetPayload: createNewPost,
});
