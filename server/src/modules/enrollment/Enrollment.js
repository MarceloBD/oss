import moment from 'moment-timezone';

export const getCurrentEnrollment = ({ prisma, user }) =>
  prisma.enrollments({
    first: 1,
    orderBy: 'lastAccess_DESC',
    where: { user: { id: user.id }, lastAccess_not: null, active: true },
  });

export const getOrCreateEnrollment = async ({ context, student, course, startTrial, endTrial }) => {
  let enrollment;

  const [user] = await context.prisma.users({ where: { student: { id: student.id } } });
  [enrollment] = await context.prisma.enrollments({
    where: { user: { id: user.id }, course: { id: course.id } },
  });
  if (enrollment && enrollment.active) {
    throw new Error('Usuário não pode requisitar trial');
  }

  if (!enrollment) {
    enrollment = await context.prisma.createEnrollment({
      user: {
        connect: { id: user.id },
      },
      course: {
        connect: { id: course.id },
      },
      startTrial,
      endTrial,
      lastAccess: moment(),
    });
  }

  await context.prisma.updateEnrollment({ data: { active: true }, where: { id: enrollment.id } });

  return enrollment;
};
