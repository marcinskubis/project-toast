import React from 'react';

import useEscape from '../../use-escape.hook';

export const ToastContext = React.createContext('');

function ToastProvider({ children }) {

  const [toasts, setToasts] = React.useState([]);
  useEscape(() => setToasts([]));

  React.useEffect(() => {
    console.log(toasts);
  }, [toasts])

  useEscape(() => setToasts([]));

  const handleAddToast = (toast) => {
    setToasts((prev) => {
      return (
        [...prev, toast]
      )
    })
  }
  const handleToastRemoval = React.useCallback((id) => {
    const filteredtoasts = [...toasts].filter((toast) => toast.id !== id);
    setToasts(filteredtoasts)
  }, [toasts]);
  return (
    <ToastContext.Provider value={{ toasts, handleToastRemoval, handleAddToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
