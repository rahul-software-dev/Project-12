export const notifySuccess = (msg) => {
    window.dispatchEvent(new CustomEvent('toast', {
      detail: { type: 'success', message: msg },
    }));
  };
  
  export const notifyError = (msg) => {
    window.dispatchEvent(new CustomEvent('toast', {
      detail: { type: 'error', message: msg },
    }));
  };