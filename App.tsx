import React from 'react';
import { Provider } from 'react-redux';
import { Routes } from './src/navigationConfig/routes';
import { store } from './src/redux';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};
