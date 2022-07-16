import Container from './Container';
import Section from './Section';
import ContactForm from './contactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contactsOperations';

import { getContacts } from '../redux/contacts/contactsSelectors';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const contacts = useSelector(getContacts);
  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      )}
    </Container>
  );
}

export default App;
