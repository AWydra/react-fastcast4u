// @ts-nocheck
// Inspired by: https://github.com/assoconnect/react-tawkto

const init = (tawkToId, readyCallback, events) => {
  if (!tawkToId) {
    throw new Error('TawkTo id is missing');
  }
  const tawkToScript = document.getElementById('tawkToScript');
  if (tawkToScript) {
    // Prevent TawkTo to create root script if it already exists
    return window.Tawk_API;
  }
  // See https://www.tawk.to/knowledgebase/getting-started/adding-a-widget-to-your-website/ for widget creation
  const s1 = document.createElement('script');
  s1.id = 'tawkToScript';
  s1.async = true;
  s1.src = `https://embed.tawk.to/${tawkToId}/default`;
  s1.setAttribute('crossorigin', '*');
  const s0 = document.getElementsByTagName('script')[0];
  if (!s0 || !s0.parentNode) {
    throw new Error('DOM is missing');
  }
  s0.parentNode.insertBefore(s1, s0);

  document.body.appendChild(s0);
  document.body.appendChild(s1);

  window.Tawk_API = window.Tawk_API || {};

  events &&
    events.forEach(({ ev, fn }) => {
      window.Tawk_API[ev] = fn;
    });

  const check = callback => {
    if (window && window.Tawk_API && window.Tawk_API.onLoaded) {
      callback(window.Tawk_API);
      return;
    }
    setTimeout(() => {
      check(callback);
    }, 0);
  };

  return check(readyCallback);
};

export default { init };
