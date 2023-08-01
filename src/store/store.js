import {
  configureStore,
  // getDefaultMiddleware,
  // combineReducers,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import { contactReducer } from './contacts/reducer-contacts';
// import { filterReducer } from './filter/reducer-filter';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

const persistConfig = {
  key: 'contactsList',
  // key: 'contacts',      // сработает проверка на дубликаты
  storage,
  // blacklist: ['filter'],
};

const persistedContactReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// // отклонено
// const middleware = getDefaultMiddleware({
//   serializableCheck: {
//     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//   },
// });

// const rootReducer = combineReducers({
//   contacts: contactReducer,
//   filter: filterReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer, middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

export const persistor = persistStore(store);
