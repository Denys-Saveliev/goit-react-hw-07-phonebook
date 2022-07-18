import s from './ContactList.module.css';
import { useSelector } from 'react-redux';

import { getFilter, getContacts } from 'redux/contacts/contactsSelectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

const ContactList = () => {
  const value = useSelector(getFilter);

  const contacts = useSelector(getContacts).filter(item =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <ContactListItem contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};

export default ContactList;
