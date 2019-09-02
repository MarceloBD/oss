import { Snackbar } from '@material-ui/core';
import Success from '@material-ui/icons/Done';
import Error from '@material-ui/icons/Error';
import PubSub from 'pubsub-js';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import theme from './theme';

const AUTO_HIDE_DURATION = 3000;

const SUCCESS_TYPE = 'success';
const ERROR_TYPE = 'error';

const StyledSuccess = styled(Success)`
  color: ${theme.palette.common.white};
`;

const StyledError = styled(Error)`
  color: ${theme.palette.common.white};
`;

export const Message = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState();
  const [icon, setIcon] = useState();

  const handleSubscribe = (type, data) => {
    switch (type) {
      case SUCCESS_TYPE:
        setIcon(<StyledSuccess key="success-icon" />);
        setMessage(data.message);
        setOpen(true);
        break;
      case ERROR_TYPE:
        setIcon(<StyledError key="error-icon" />);
        setMessage(data.message);
        setOpen(true);
        break;
      default:
    }
  };

  useEffect(() => {
    PubSub.subscribe(SUCCESS_TYPE, handleSubscribe);
    PubSub.subscribe(ERROR_TYPE, handleSubscribe);
  });

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={AUTO_HIDE_DURATION}
      onClose={() => setOpen(false)}
      message={message}
      action={[icon]}
    />
  );
};

const success = message => PubSub.publish(SUCCESS_TYPE, { message });
const error = message => PubSub.publish(ERROR_TYPE, { message });

export default {
  success,
  error,
};
