import '@/styles/globals.css'
import React from 'react';
import { Provider } from 'react-redux';
import store from '../stores';

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
