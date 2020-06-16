const events = ['mousemove', 'scroll', 'keydown', 'click', 'touchstart'];

const detectInteraction = callback => {
  events.forEach(ev => {
    document.addEventListener(ev, function handler(e) {
      e.currentTarget.removeEventListener(e.type, handler);
      e.currentTarget.removeEventListener('scroll', handler);
      callback();
    });
  });
};

export default detectInteraction;
