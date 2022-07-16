import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest'
);

export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess'
);

export const fetchContactsError = createAction('contacts/fetchContactsError');

export const createContactRequest = createAction(
  'contacts/createContactRequest'
);

export const createContactSuccess = createAction(
  'contacts/createContactSuccess'
);

export const createContactError = createAction('contacts/createContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest'
);

export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess'
);

export const deleteContactError = createAction('contacts/deleteContactError');

export const changeFilter = createAction('contacts/changeFilter');
