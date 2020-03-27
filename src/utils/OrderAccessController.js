import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const steps = [
  {
    step: 0,
    href: '/order',
  },
  {
    step: 1,
    href: '/order/package',
  },
  {
    step: 2,
    href: '/order/login',
  },
  {
    step: 3,
    href: '/order/payment',
  },
];

const getHref = step => steps.find(el => el.step === step).href;

const OrderAccessController = ({ currentStep }) => {
  const [cookies] = useCookies(['Fc4uOrder_Session']);
  const [step, setStep] = useState(0);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!cookies.Fc4uOrder_Session) return setRedirect(true);
    const { step } = cookies.Fc4uOrder_Session;
    setStep(step);
    step < currentStep && setRedirect(true);
  }, [cookies, currentStep]);

  return redirect && <Redirect to={getHref(step)} />;
};

OrderAccessController.propTypes = {
  currentStep: PropTypes.number.isRequired,
};

export default OrderAccessController;
