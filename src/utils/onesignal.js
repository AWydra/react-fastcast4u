const handleLoaded = () => {
  const OneSignal = window.OneSignal || [];
  OneSignal.push([
    'init',
    {
      appId: '88664d34-c994-44c8-bb20-c5c041b7834e',
      autoRegister: true,
      notifyButton: {
        enable: false /* Set to false to hide */,
      },
      safari_web_id: 'web.onesignal.auto.16fe94fe-85b7-4f18-b294-6465f1482156',
    },
  ]);
};

const init = () => {
  const script = document.createElement('script');
  script.src = 'https://cdn.onesignal.com/sdks/OneSignalSDK.js';
  script.addEventListener('load', handleLoaded);
  document.body.appendChild(script);
};

export default { init };
