export default (array, { after = 0, first, count }) => ({
  edges: array.map((elem, idx) => ({ node: elem, cursor: after + 1 + idx })),
  pageInfo: {
    startCursor: after + 1,
    endCursor: after + array.length,
    hasNextPage: count > first + after + 1,
  },
});

export const pageFromArgsArray = ({ after, first = 10 }) => (after ? after / first + 1 : 1);
