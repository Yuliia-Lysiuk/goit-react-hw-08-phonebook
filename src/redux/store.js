import { configureStore, createSlice } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactsApi } from './contacts/contactsSlice';
import { authSlice } from './auth/authSlice';
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

const persistConfig = {
  key: 'theme',
  storage: storage,
};

const persistorConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContacts(state, action) {
      state.items.push(action.payload);
    },
    deleteContacts(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const themeSlice = createSlice({
  name: 'theme',
  initialState: { value: true },
  reducers: {
    changeTheme(state) {
      state.value = !state.value;
    },
  },
});

const persistedReducer = persistReducer(persistConfig, themeSlice.reducer);
const persistedsReducer = persistReducer(persistorConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    auth: persistedsReducer,
    contacts: contactsSlice.reducer,
    theme: persistedReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],
});

export const persistor = persistStore(store);

export const { addContacts, deleteContacts, changeFilter } =
  contactsSlice.actions;

export const { changeTheme } = themeSlice.actions;

setupListeners(store.dispatch);
