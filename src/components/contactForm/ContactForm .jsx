import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Notiflix from 'notiflix';
import s from './ContactForm.module.css';
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from 'redux/contacts/contactsApiSlice';
import { Loader } from 'components/Loader/Loader';

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
  const { data } = useFetchContactsQuery();
  const [createContact, { isLoading }] = useCreateContactMutation();

  const handleSubmit = (values, { resetForm }) => {
    if (
      data.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${values.name} is already in contacts`);
      return;
    }

    createContact(values).then(() =>
      Notiflix.Notify.success('Contact added to your phonebook!')
    );
    resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={schema}
    >
      <Form className={s.form} autoComplete="off">
        <Field placeholder="Name" className={s.input} type="text" name="name" />
        <span className={s.inputNameFocus}></span>
        <ErrorMessage name="name" render={warningNameValidation} />

        <Field
          placeholder="Phone number"
          className={s.input}
          type="tel"
          name="phone"
        />
        <span className={s.inputTelFocus}></span>
        <ErrorMessage name="phone" render={warningNumberValidation} />

        <button className={s.btn} type="submit">
          {isLoading ? <Loader /> : 'Add contact'}
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
