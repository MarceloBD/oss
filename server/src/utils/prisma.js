// eslint-disable-next-line import/no-unresolved
import { prisma } from './prisma-client';

export const types = prisma.getTypes();
export default prisma;
