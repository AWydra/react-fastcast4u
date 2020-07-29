import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import * as serviceWorker from 'serviceWorker';

const ServiceWorkerHandler = () => {
  const [cookies, setCookie] = useCookies(['sw_refreshed']);

  useEffect(() => {
    serviceWorker.register({
      onUpdate: async registration => {
        if (registration && registration.waiting) {
          await registration.unregister();
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
          if (!cookies.sw_refreshed) {
            setCookie('sw_refreshed', true);
            window.location.reload(true);
          }
        }
      },
    });
    // eslint-disable-next-line
  }, []);

  return null;
};

export default ServiceWorkerHandler;
