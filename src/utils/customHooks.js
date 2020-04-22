import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import generalActions from 'actions/generalActions';

export const useAlert = () => {
  const [alert, setAlert] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(generalActions.setAlert(alert));
  }, [alert, dispatch]);
  return {
    success: content => setAlert({ content, type: 'success', open: true }),
    warning: content => setAlert({ content, type: 'warning', open: true }),
    error: content => setAlert({ content, type: 'error', open: true }),
    info: content => setAlert({ content, type: 'info', open: true }),
    show: () => setAlert({ open: true }),
    hide: () => setAlert({ open: false }),
  };
};

export const useDidUpdate = (callback, deps) => {
  const hasMount = useRef(false);

  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
    // eslint-disable-next-line
  }, deps);
};

export default { useAlert, useDidUpdate };
