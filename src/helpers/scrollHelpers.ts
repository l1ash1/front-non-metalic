let lockCount = 0;

export const lockBodyScroll = (disableScroll = true) => {
  if (disableScroll) {
    lockCount++;
    if (lockCount > 1) return;
    const offset = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${offset}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.bottom = '0';
    return;
  }
  if (lockCount === 0) return;
  lockCount--;
  if (lockCount > 0) return;
  const offset = parseFloat(document.body.style.top || '-0') * -1;
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.left = '';
  document.body.style.right = '';
  document.body.style.bottom = '';
  window.scrollTo(0, offset);
};
