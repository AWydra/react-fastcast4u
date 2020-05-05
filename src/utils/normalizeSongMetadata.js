import defaultCoverPicture from 'assets/img/cover.png';

const normalizeShoutCast2 = ({ data }) => {
  const { listeners, track } = data[0];

  return {
    artist: track.artist,
    title: track.title,
    image: track.imageurl.includes('nocover') ? defaultCoverPicture : track.imageurl,
    listeners,
  };
};

const normalizeSongMetadata = (type, data) => {
  switch (type) {
    case 'IceCast':
    case 'ShoutCast':
    case 'ShoutCast2':
      return normalizeShoutCast2(data);
    default:
      console.error('Unknown server type:', type);
  }
};

export default normalizeSongMetadata;
