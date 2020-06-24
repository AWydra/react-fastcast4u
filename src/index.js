import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root/Root';
import * as serviceWorker from 'serviceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));

serviceWorker.register({
  onUpdate: async registration => {
    if (registration && registration.waiting) {
      await registration.unregister();
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      window.location.reload();
    }
  },
});
