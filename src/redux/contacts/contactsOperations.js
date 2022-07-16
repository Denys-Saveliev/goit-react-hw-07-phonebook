import * as contactsAPI from '../../service/contacts-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => await contactsAPI.fetchContacts()
);

const addContact = createAsyncThunk(
  'contacts/createContact',
  async contact => await contactsAPI.createContact(contact)
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => await contactsAPI.deleteContact(contactId)
);

export { fetchContacts, addContact, deleteContact };
