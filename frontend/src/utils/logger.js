export const log = (...args) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[DEBUG]', ...args);
    }
  };
  
  export const logError = (...args) => {
    console.error('[ERROR]', ...args);
  };