import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFilter } from 'redux/contacts/contactsSelectors';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contactsOperations';

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

  return (
    <ul className={s.list}>
      {contacts.map(({ name, id, number }) => (
        <li key={id} className={s.item}>
          {name}: {number}
          <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
