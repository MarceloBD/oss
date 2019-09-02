import GetResourceMutation from '../modules/resource/mutations/GetResourceMutation';
import { environment } from './relay';

const triggerEvent = ({ link, download, newTab }) => {
  if (download) {
    const a = document.createElement('a');
    a.href = link;
    const clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: false,
    });
    a.dispatchEvent(clickEvent);
  } else {
    newTab.location = link; // eslint-disable-line
  }
};

export const handleResourceDownload = ({ resourceId, download, s3Options }) => {
  let newTab;
  if (!download) {
    newTab = window.open('');
  }
  GetResourceMutation.commit(environment, {
    variables: {
      resourceId,
      download,
      s3Options,
    },
    onCompleted: ({ getResource: { link } }) => triggerEvent({ link, download, newTab }),
  });
};
