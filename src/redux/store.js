import {
  configureStore,
} from '@reduxjs/toolkit';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

// const persistConfig = {
//   key: 'contactsList',
//   // key: 'contacts',      // сработает проверка на дубликаты
//   storage,
//   // blacklist: ['filter'],
// };

// const persistedContactReducer = persistReducer(persistConfig, contactReducer);

// export const store = configureStore({
//   reducer: {
//     contacts: persistedContactReducer,
//     filter: filterReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
