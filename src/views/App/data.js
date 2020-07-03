/* eslint-disable react/no-unescaped-entities */

export const heroData = {
  heading: 'New Mobile App for your Online Radio Station',
  pictures: {
    mobile: 'https://img.fastcast4u.com/react/app/app-bg',
    // desktop: 'https://img.fastcast4u.com/react/alexa/alexa-bg',
    alt: 'Phone in a hand',
  },
  buttons: [
    {
      label: 'CREATE YOUR APP',
      onClick: () => console.log('clicked'),
      color: 'primary',
    },
    {
      label: 'Watch App Video',
      color: 'secondary',
      component: 'a',
      href: 'https://www.amazon.com/dp/B08B8RN7Y6/',
      target: '_blank',
    },
  ],
};

export const sectionsData = [
  {
    img: 'https://img.fastcast4u.com/react/app/IPadIP',
    heading: 'Android & iOS',
    content: 'The New 2020 Mobile App for Android, iPhone & iPad.',
    button: {
      label: 'Specification',
      href: 'https://www.amazon.com/dp/B08B8RN7Y6/',
    },
  },
  {
    img: 'https://img.fastcast4u.com/react/app/IPX_2',
    heading: 'Radio stream and more...',
    content:
      'The App features a Player for Online Radio and Live TV/Video streams. You get a unique App with your own branding, artwork and color theme.',
    button: {
      label: 'GET NOW',
      onClick: () => {
        console.log('clicked');
      },
    },
  },
  {
    img: 'https://img.fastcast4u.com/react/app/IPX_5',
    heading: 'Your own Mobile App',
    content:
      'Create your own Mobile App with a customized look and content. Your Social Media and Website will be available in a built-in WebView.',
    button: {
      label: 'GET NOW',
      onClick: () => {
        console.log('clicked');
      },
    },
  },
  {
    img: 'https://img.fastcast4u.com/react/app/app-creator',
    heading: 'Online App Creator',
    content: 'Design and Preview your App in the Creator. Absolutely no coding skills required!',
    button: {
      label: 'OPEN APP CREATOR',
      onClick: () => {
        console.log('clicked');
      },
    },
  },
];
