import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const value = useSelector(contactsSelectors.getFilter);

  const contacts = useSelector(state =>
    state.contacts.items.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    )
  );

  return (
    contacts.length > 0 && (
      <ul className={s.list}>
        {contacts.map(({ name, id, number }) => (
          <li key={id} className={s.item}>
            {name}: {number}
            <button
              className={s.btn}
              onClick={() => dispatch(contactsOperations.deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    )
  );
};

export default ContactList;
