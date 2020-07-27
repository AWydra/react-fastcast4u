import React from 'react';
import { useSelector } from 'react-redux';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import HeadingBlock from 'components/molecules/HeadingBlock/HeadingBlock';
import TicketForm from 'components/organisms/Forms/TicketForm/TicketForm';

const Ticket = () => {
  const content = useSelector(state => state.language.ticket);

  return (
    <FullContainer maxWidth="lg">
      <HeadingBlock title={content.title} />
      <TicketForm />
    </FullContainer>
  );
};

export default Ticket;
