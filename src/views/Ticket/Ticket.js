import React from 'react';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import TicketForm from 'components/organisms/Forms/TicketForm/TicketForm';

const Ticket = () => (
  <FullContainer maxWidth="lg">
    <HeadingBlock title="Send us a message" />
    <TicketForm />
  </FullContainer>
);

export default Ticket;
