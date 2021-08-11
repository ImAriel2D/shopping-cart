import React, { useState, FormEvent } from 'react';

import { PaymentComponent } from './payment.component';

export const Payment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [wasPaid, setWasPaid] = useState(false);
  
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsOpen(true);
  };
  
  const onDialogClose = () => {
    setIsOpen(false);
  };
  
  const onPayClick = () => {
    setIsOpen(false);
    setWasPaid(true);
  };
  
  const onWasPaidClick = () => {
    setWasPaid(false);
    window.location.href = '/';
  };
  
  return (
    <PaymentComponent
      onSubmit={onSubmit}
      onDialogClose={onDialogClose}
      isDialogOpen={isOpen}
      onPayClick={onPayClick}
      onWasPaidClick={onWasPaidClick}
      wasPaid={wasPaid}
    />
  );
};
