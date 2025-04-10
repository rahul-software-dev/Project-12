export const getQueryParams = () => {
    return Object.fromEntries(new URLSearchParams(window.location.search));
  };
  
  export const updateQueryParams = (params) => {
    const search = new URLSearchParams(params).toString();
    window.history.pushState(null, '', '?' + search);
  };