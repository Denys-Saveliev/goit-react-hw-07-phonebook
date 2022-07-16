import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './contacts/contactsReducer';

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});

export default store;
