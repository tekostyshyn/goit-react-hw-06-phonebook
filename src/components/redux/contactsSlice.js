import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitState = {contactsList: []};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contactsList.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contactsList.findIndex(contact => contact.id === action.payload);
      state.contactsList.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contact',
  version: 1,
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
export const { addContact, deleteContact } = contactsSlice.actions;
