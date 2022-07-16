import * as contactsAPI from '../../service/contacts-api';
import * as contactsActions from './contactsActions';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const contacts = await contactsAPI.fetchContacts();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

export const addContact = contact => async dispatch => {
  dispatch(contactsActions.createContactRequest());

  try {
    const contacts = await contactsAPI.createContact(contact);
    dispatch(contactsActions.createContactSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.createContactError(error));
  }
};

export const deleteContact = contactId => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());

  try {
    const contacts = await contactsAPI.deleteContact(contactId);
    dispatch(contactsActions.deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(contactsActions.deleteContactError(error));
  }
};
