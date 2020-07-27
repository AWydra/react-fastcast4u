import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useMediaQuery, useTheme } from '@material-ui/core';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import ColumnForm from 'components/molecules/ColumnForm/ColumnForm';
import BoxTitle from 'components/atoms/BoxTitle/BoxTitle';
import Stepper from 'components/organisms/Stepper/Stepper';
import DetailsForm from 'components/organisms/Forms/OrderDetailsForm/OrderDetailsForm';
import orderServices from 'services/order';
import OrderAccessController from 'utils/OrderAccessController';
import { useAlert } from 'utils/customHooks';

const OrderDetails = () => {
  const steps = useSelector(state => state.language.order.stepper);
  const title = useSelector(state => state.language.orderDetails.title);
  const [loading, setLoading] = useState(false);
  const alert = useAlert();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    const checkCompatibility = async () => {
      setLoading(true);
      try {
        await orderServices.checkCompatibility();
        setLoading(false);
      } catch (err) {
        if (!err.__CANCEL__) {
          alert.error(err.response.data.errorMessage || err.message);
          setLoading(false);
        }
      }
    };
    checkCompatibility();

    return () => orderServices.cancel();
    // eslint-disable-next-line
  }, []);

  return (
    <FullContainer center centerX>
      <OrderAccessController currentStep={3} />
      {matches && <Stepper steps={steps} activeStep={2} mb={6} />}
      <ColumnForm loading={loading}>
        <BoxTitle variant="h5" component="h1" mb={2}>
          {title}
        </BoxTitle>
        <DetailsForm setLoading={setLoading} />
      </ColumnForm>
    </FullContainer>
  );
};

export default OrderDetails;
