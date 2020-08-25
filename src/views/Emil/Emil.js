import React from 'react';
import BusinessCard from 'components/organisms/BusinessCard/BusinessCard';
import { Phone, WhatsApp, MailOutline } from '@material-ui/icons';

const data = {
  title: 'EMIL STASZAK',
  subtitle: 'Customer Relationship Manager',
  content:
    "With us, you can always expect a flexible and customer-oriented approach so if you have any special requests or requirements, don't hesitate to contact me.",
  img: 'https://fastcast4u.com/images/team/emil.jpg',
  links: [
    {
      component: 'a',
      icon: <Phone />,
      href: 'tel:+48600074271',
      content: '+48 600-074-271 (EU)',
    },
    {
      component: 'a',
      icon: <WhatsApp />,
      href: 'https://wa.me/48600074271',
      content: '+48 600-074-271',
    },
    {
      component: 'a',
      icon: <MailOutline />,
      href: 'mailto:e.staszak@fastcast4u.com',
      content: 'e.staszak@fastcast4u.com',
    },
  ],
};

const Emil = () => {
  return <BusinessCard {...data} />;
};

export default Emil;
