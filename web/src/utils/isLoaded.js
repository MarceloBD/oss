import React from 'react';

export default i18n => {
  const [create, setCreate] = React.useState(false);

  React.useEffect(() => {
    i18n.on('loaded', loaded => {
      if (loaded && loaded[i18n.language]) setCreate(true);
    });
  });
  return create;
};
