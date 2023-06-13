import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, 
    persistStore, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // це localStorage під капотом браузера
import { contactsReduser } from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';
import { authReduser } from './auth/auth-slice';


const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
  };
  
  export const store = configureStore({
    reducer: {
      auth: persistReducer(persistConfig, authReduser),
      filter: filterReducer,
      contacts: contactsReduser,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export const persistor = persistStore(store);