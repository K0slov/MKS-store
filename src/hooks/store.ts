import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux';
import { itemList } from './reducers/userReducers';

export const store = configureStore({
    reducer: {
      itemList,
    },
  });