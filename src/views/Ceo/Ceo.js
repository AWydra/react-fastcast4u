import React from 'react';
import { Link } from 'react-router-dom';
import BusinessCard from 'components/organisms/BusinessCard/BusinessCard';
import { Phone, WhatsApp, MailOutline, Language } from '@material-ui/icons';

const data = {
  title: 'MIŁOSZ MIEDZIŃSKI',
  subtitle: 'CEO of FastCast DWC-LLC',
  content:
    'My Company, founded in 2008, provides Internet Radio Stream Hosting Solutions worldwide. I will be honored if you join us with your Business, Organization or Project.',
  img: 'https://fastcast4u.com/images/icons/avatar.jpg',
  links: [
    {
      component: 'a',
      icon: <Phone />,
      href: 'tel:+971585305230',
      content: '+971 585-305-230',
    },
    {
      component: 'a',
      icon: <Phone />,
      href: 'tel:+48790530523',
      content: '+48 790-530-523 (EU)',
    },
    {
      component: 'a',
      icon: <WhatsApp />,
      href: 'https://wa.me/790530523',
      content: '+48 790-530-523 (EU)',
    },
    {
      component: 'a',
      icon: <MailOutline />,
      href: 'mailto:ceo@fastcast4u.com',
      content: 'ceo@fastcast4u.com',
    },
    {
      component: Link,
      icon: <Language />,
      to: '',
      content: 'fastcast4u.com',
    },
  ],
};

const Ceo = () => {
  return <BusinessCard {...data} />;
};

export default Ceo;
