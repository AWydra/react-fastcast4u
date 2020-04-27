// @ts-nocheck
import { store } from 'store';

const generateLink = ({ page, sort }) => {
  const state = store.getState().directory;

  return `/radio-directory${state.title ? `/search/${state.title}` : ''}/${page || state.page}${
    sort === 'popular' || (!sort && state.sort === 'popular') ? '' : `/${sort || state.sort}`
  }`;
};

export default generateLink;
