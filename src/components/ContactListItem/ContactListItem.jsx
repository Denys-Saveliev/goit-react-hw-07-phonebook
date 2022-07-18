import { deleteContact } from 'redux/contacts/contactsOperations';
import { useDispatch, useSelector } from 'react-redux';
import { isDeleting } from 'redux/contacts/contactsSelectors';
import Notiflix from 'notiflix';
import { Loader } from 'components/Loader/Loader';
import s from './ContactListItem.module.css';

export const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(isDeleting);

  const handleDeleteContact = id =>
    dispatch(deleteContact(id)).then(() =>
      Notiflix.Notify.success('Contact successfully removed!')
    );

  const { name, phone, id } = contact;

  return (
    <li className={s.item}>
      <div className={s.itemContact}>
        <p>{name}:</p> <p>{phone}</p>
      </div>
      <button
        className={s.btn}
        onClick={() => {
          handleDeleteContact(id);
        }}
      >
        {isLoading ? <Loader /> : 'Delete'}
      </button>
    </li>
  );
};
