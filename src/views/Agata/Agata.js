import React from 'react';
import BusinessCard from 'components/organisms/BusinessCard/BusinessCard';
import { Phone, WhatsApp, MailOutline } from '@material-ui/icons';

const data = {
  title: 'AGATA RATAJCZAK',
  subtitle: 'Sales and Customer Service',
  content:
    'I will be pleased to present you the offer, discuss our services and new possibilities for your Business.',
  img: 'https://fastcast4u.com/images/team/agata.png',
  links: [
    {
      component: 'a',
      icon: <Phone />,
      href: 'tel:+48697510476',
      content: '+48 697-510-476 (EU)',
    },
    {
      component: 'a',
      icon: <WhatsApp />,
      href: 'https://wa.me/48697510476',
      content: '+48 697-510-476',
    },
    {
      component: 'a',
      icon: <MailOutline />,
      href: 'mailto:a.ratajczak@fastcast4u.com',
      content: 'a.ratajczak@fastcast4u.com',
    },
  ],
};

const Agata = () => {
  return <BusinessCard {...data} />;
};

export default Agata;
