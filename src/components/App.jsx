import Container from './Container';
import Section from './Section';
import ContactForm from './contactForm';
import Filter from './Filter';
import ContactList from './ContactList';

function App() {
  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}

export default App;
