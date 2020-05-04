import openPopup from './openPopup';

const destinationLink = id => `https://fastcast4u.com/radio-directory/station/${id}`;

const facebook = id => openPopup(`https://www.facebook.com/sharer.php?u=${destinationLink(id)}`);

const twitter = id =>
  openPopup(
    `https://twitter.com/intent/tweet?url=${destinationLink(id)}&text=Look at my radio station`,
  );

const messenger = id =>
  `https://www.facebook.com/dialog/send?link=${destinationLink(
    id,
  )}&app_id=109035263186126&redirect_uri=https%3A%2F%2Ffastcast4u.com%2Fradio-directory%2Fstation%2F35416%2F`;

export default {
  copy: destinationLink,
  facebook,
  twitter,
  messenger,
};
