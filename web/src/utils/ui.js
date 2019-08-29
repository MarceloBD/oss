export const getScrollbarWidth = () => {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.width = '100px';
  outer.style.msOverflowStyle = 'scrollbar';

  document.body.appendChild(outer);

  const widthNoScroll = outer.offsetWidth;
  outer.style.overflow = 'scroll';

  const inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);

  const widthWithScroll = inner.offsetWidth;

  outer.parentNode.removeChild(outer);

  return widthNoScroll - widthWithScroll;
};

export const gotoBottom = element => {
  if (element) {
    // eslint-disable-next-line no-param-reassign
    element.scrollTop = element.scrollHeight - element.clientHeight;
  }
};

export const scrollToItem = (element, offset) => {
  if (element) {
    // eslint-disable-next-line no-param-reassign
    element.parentNode.scrollTop = element.offsetTop - element.parentNode.offsetTop - offset;
  }
};

export default {
  getScrollbarWidth,
};
