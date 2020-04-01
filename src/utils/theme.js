// @ts-nocheck
import { store } from 'store';

export const modeSwitch = (light, dark) => {
  const state = store.getState();
  return state.general.theme !== 'dark' ? light : dark;
};

export default { modeSwitch };
