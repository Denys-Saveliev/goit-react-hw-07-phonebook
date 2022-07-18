import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Notiflix from 'notiflix';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/contactsSelectors';

const warningNameValidation = () =>
  Notiflix.Notify.failure(
    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  );

const warningNumberValidation = () =>
  Notiflix.Notify.failure('Please type a valid Phone number!');

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required(),
  phone: yup
    .string()
    .matches(
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/
    )
    .required(),
});

const initialValues = { name: '', phone: '' };

const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={schema}
    >
      <Form className={s.form}>
        <Field placeholder="Name" className={s.input} type="text" name="name" />
        <ErrorMessage name="name" render={warningNameValidation} />

        <Field
          placeholder="Phone number"
          className={s.input}
          type="tel"
          name="phone"
        />
        <ErrorMessage name="phone" render={warningNumberValidation} />

        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
