import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './contacts/contactsReducer';

// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});

// const middleware = getDefaultMiddleware => [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const rootReducer = combineReducers({ contacts: contactsReducers });

// const store = configureStore({
//   reducer: rootReducer,
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

export default store;
