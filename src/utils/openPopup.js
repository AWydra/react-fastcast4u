const openPopup = (url, w = 800, h = 500) => {
  const left = window.innerWidth / 2 - w / 2 + window.screenLeft;
  const top = window.innerHeight / 2 - h / 2 + window.screenTop;
  const newWindow = window.open(
    url,
    'popup',
    `scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`,
  );

  if (window.focus) {
    newWindow.focus();
  }
};

export default openPopup;
