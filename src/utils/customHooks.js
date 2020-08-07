import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import generalActions from 'actions/generalActions';

export const useAlert = () => {
  const dispatch = useDispatch();

  return {
    success: content => dispatch(generalActions.setAlert.success(content)),
    warning: content => dispatch(generalActions.setAlert.warning(content)),
    error: content => dispatch(generalActions.setAlert.error(content)),
    info: content => dispatch(generalActions.setAlert.info(content)),
    show: () => dispatch(generalActions.setAlert.show()),
    hide: () => dispatch(generalActions.setAlert.hide()),
  };
};

export const useDidUpdate = (fn, conditions) => {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }

    return fn && fn();
    // eslint-disable-next-line
  }, conditions);
};

export const useCurrentLanguage = () => {
  const currLng = useSelector(state => state.language.code);

  return currLng === 'en' ? '' : `/${currLng}`;
};

export default { useAlert, useDidUpdate };
