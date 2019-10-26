import photon from '../../utils/photon';

export const getMaterial = async ({ id, user }) => {
  let staff = false;
  if (user) {
    [staff] = await photon.users.findOne({ where: { id: user.id } }).staff();
  }
  const showOnlyChecked = () => (!staff ? { checked: true } : {});
  const [material] = await photon.materials({ where: { id, post: { every: { ...showOnlyChecked() } } } });
  if (!material) {
    throw new Error('unauthorized');
  }
  return material;
};
