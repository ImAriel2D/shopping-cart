import React, { FC, FormEvent } from 'react';
import {
  Input,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogActions,
} from '@material-ui/core';
import { Favorite } from '@material-ui/icons';

import { useTypedSelector } from '../../hooks/useTypedSelector';

interface PaymentComponentType {
  onSubmit: (e: FormEvent) => void,
  onDialogClose: () => void,
  onPayClick: () => void,
  onWasPaidClick: () => void,
  isDialogOpen: boolean,
  wasPaid: boolean,
}

export const PaymentComponent: FC<PaymentComponentType> = ({
  onSubmit,
  onDialogClose,
  isDialogOpen,
  onPayClick,
  wasPaid,
  onWasPaidClick,
}) => {
  const cart = useTypedSelector((state) => state.cart);
  
  return (
    <form onSubmit={onSubmit}>
      <h1>Total of: ${cart.total}</h1>
      <div>
        <Input placeholder="Name" required={true}/>
        <Input placeholder="Last Name" required={true}/>
        <Input placeholder="email" />
      </div>
      <div>
        <Input placeholder="Street Name" required={true}/>
        <Input placeholder="Full Address" required={true}/>
        <Input placeholder="State" required={true}/>
        <Input placeholder="City" required={true}/>
        <Input placeholder="Zip" required={true}/>
      </div>
      <Button type="submit">Pay total of ${cart.total}</Button>
      <Dialog open={isDialogOpen}>
        <DialogTitle>You're about to pay ${cart.total}</DialogTitle>
        <DialogActions>
          <Button onClick={onPayClick}>
            Pay
          </Button>
          <Button onClick={onDialogClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={wasPaid}>
        <DialogTitle>Thanks for buying with us!</DialogTitle>
        <DialogActions>
          <IconButton onClick={onWasPaidClick}>
            <Favorite />
          </IconButton>
        </DialogActions>
      </Dialog>
    </form>
  )
};
