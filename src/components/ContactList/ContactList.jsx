import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFilter } from 'redux/contacts/contactsSelectors';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contactsOperations';
import Notiflix from 'notiflix';

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const value = useSelector(getFilter);

  const contacts = useSelector(state =>
    state.contacts.items.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    )
  );

  const handleDeleteContact = id =>
    dispatch(deleteContact(id)).then(() =>
      Notiflix.Notify.success('Contact successfully removed!')
    );

  return (
    <ul className={s.list}>
      {contacts.map(({ name, id, phone }) => (
        <li key={id} className={s.item}>
          {name}: {phone}
          <button className={s.btn} onClick={() => handleDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
