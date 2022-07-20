import Container from './Container';
import Section from './Section';
import ContactForm from './contactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import { Loader } from './Loader/Loader';
import { useFetchContactsQuery } from 'redux/contacts/contactsApiSlice';
import { useState } from 'react';

function App() {
  const [filter, setfilter] = useState('');

  const handleFilterChange = e => setfilter(e.target.value);

  const { isLoading, data } = useFetchContactsQuery();

  const showData = data?.length > 0;

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {isLoading && <Loader />}

      <Section title="Contacts">
        <Filter value={filter} onChange={handleFilterChange} />
        {showData && (
          <ContactList
            contacts={data.filter(({ name }) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )}
          />
        )}
      </Section>
    </Container>
  );
}

export default App;
