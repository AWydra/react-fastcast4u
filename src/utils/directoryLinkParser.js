// @ts-nocheck
import { store } from 'store';

const generateLink = ({ page, sort, title }) => {
  const state = store.getState().directory;

  return `/radio-directory${title || state.title ? `/search/${title || state.title}` : ''}/${page ||
    state.page}${
    sort === 'popular' || (!sort && state.sort === 'popular') ? '' : `/${sort || state.sort}`
  }`;
};

export default generateLink;
