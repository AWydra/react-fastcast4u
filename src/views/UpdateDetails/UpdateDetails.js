import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import orderServices from 'services/order';
import Text from 'components/atoms/Text/Text';
import FullContainer from 'components/atoms/FullContainer/FullContainer';
import ColumnForm from 'components/molecules/ColumnForm/ColumnForm';
import BoxTitle from 'components/atoms/BoxTitle/BoxTitle';
import DetailsForm from 'components/organisms/Forms/OrderDetailsForm/OrderDetailsForm';
import { useAlert, useDidUpdate } from 'utils/customHooks';
import history from 'utils/history';

const UpdateDetails = () => {
  const [loading, setLoading] = useState(false);
  const [counter, setCounter] = useState(5);
  const [params, setParams] = useState({});
  const [handler, setHandler] = useState({ heading: 'Account Details' });
  const { search } = useLocation();
  const alert = useAlert();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const userid = params.get('userid');
    const auth = params.get('auth');
    setParams({ userid, auth });

    const checkCompatibility = async () => {
      try {
        await orderServices.updateDetails({ userid, auth, initial: 1 });
      } catch (err) {
        alert.error(err.response.data.errorMessage || err.message);
        setHandler({
          heading: err.response.data.errorMessage || err.message,
          hide: true,
          redirect: '/contact',
        });
      }
    };

    checkCompatibility();
    // eslint-disable-next-line
  }, []);

  useDidUpdate(() => {
    handler.redirect && setTimeout(() => setCounter(counter - 1), 1000);
  }, [handler.redirect, counter]);

  return (
    <FullContainer center>
      <ColumnForm loading={loading}>
        {handler.hide ? (
          <Text align="center" variant="h5" fontWeight={500}>
            {handler.heading}
          </Text>
        ) : (
          <BoxTitle variant="h5" component="h1" mb={2}>
            {handler.heading}
          </BoxTitle>
        )}
        {!handler.hide && (
          <DetailsForm
            independent
            setLoading={setLoading}
            additionalData={params}
            setHandler={setHandler}
          />
        )}
        {handler.redirect && (
          <Text align="center" mt={2}>
            You will be redirected after {counter}s
            {counter === 0 && history.replace(handler.redirect)}
          </Text>
        )}
      </ColumnForm>
    </FullContainer>
  );
};

export default UpdateDetails;
