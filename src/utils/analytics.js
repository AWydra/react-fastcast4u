import ReactGA from 'react-ga';

const trackingId = 'UA-24990997-1';

export const initializeAnalytics = () => ReactGA.initialize(trackingId);
export default ReactGA;
