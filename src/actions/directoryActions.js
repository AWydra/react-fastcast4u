const setLoading = loading => ({
  type: 'SET_LOADING',
  payload: { loading },
});

const setPages = pages => ({
  type: 'SET_PAGES',
  payload: { pages },
});

const setSource = source => ({
  type: 'SET_SOURCE',
  payload: { source },
});

const setParams = params => ({
  type: 'SET_PARAMS',
  payload: { ...params },
});

const setStations = stations => ({
  type: 'SET_STATIONS',
  payload: { stations },
});

const setStationsPlaceholder = (number = 9) => ({
  type: 'SET_STATIONS_PLACEHOLDER',
  payload: { number },
});

const setPlayerData = data => ({
  type: 'SET_PLAYER_DATA',
  payload: { ...data },
});

const setSongMetadata = data => ({
  type: 'SET_SONG_METADATA',
  payload: { ...data },
});

export default {
  setLoading,
  setPages,
  setSource,
  setParams,
  setStations,
  setStationsPlaceholder,
  setPlayerData,
  setSongMetadata,
};
