import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Notiflix from 'notiflix';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getItems } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';

const warningNameValidation = () =>
  Notiflix.Notify.failure(
    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  );

const warningNumberValidation = () =>
  Notiflix.Notify.failure('Please type a valid value!');

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required(),
  number: yup.number().required(),
});

const initialValues = { name: '', number: '' };

const ContactForm = () => {
  const id = nanoid();
  const dispath = useDispatch();
  const contacts = useSelector(getItems);

  const handleSubmit = (values, { resetForm }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      Notiflix.Notify.failure(`${values.name} is already in contacts`);
      return;
    }
    dispath(addItem({ id, ...values }));
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
          placeholder="Number"
          className={s.input}
          type="tel"
          name="number"
        />
        <ErrorMessage name="number" render={warningNumberValidation} />

        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
