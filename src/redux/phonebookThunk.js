import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  deleteUser,
  postNewUser,
  requestContacts,
} from 'Api/Api';

export const getContacts = createAsyncThunk('contacts/getContacts', () =>
  requestContacts()
);

export const addUser = createAsyncThunk('contacts/addUser', contactData =>
  postNewUser(contactData)
);

export const onRemoveContact = createAsyncThunk(
  'contacts/onRemoveContact',
  contactId => deleteUser(contactId)
);
