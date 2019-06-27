import React from 'react';
import { Context } from './Router';
import { NavigationBar } from './styles/NavigationStyle';

const Navigation = ({ data }) => {
  const state = React.useContext(Context);
  const {page, setPage} = state;

  const changePage = change => {
    setPage(page + change);
    window.scrollTo(0, 0);
  };

  return (
   <NavigationBar>
    <button {...page <= 1 && { disabled: true }} onClick={() => changePage(-1)}>
      Previous
    </button>
    <span>
      Page {page} of {data.total_pages}
    </span>
    <button
      {...page >= data.total_pages && { disabled: true }}
      onClick={() => changePage(+1)}
    >
      Next
    </button>
  </NavigationBar>
  )
};

export default Navigation;
