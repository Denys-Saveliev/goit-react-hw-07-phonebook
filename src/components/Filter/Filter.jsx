import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from '../../redux/contacts';
import { changeFilter } from 'redux/contacts/contactsActions';

const Filter = () => {
  const value = useSelector(contactsSelectors.getFilter);
  const dispath = useDispatch();

  return (
    <input
      className={s.input}
      placeholder="Find contacts by name"
      type="text"
      value={value}
      onChange={e => dispath(changeFilter(e.target.value))}
    />
  );
};
export default Filter;
