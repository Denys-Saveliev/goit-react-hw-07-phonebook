import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';

const Filter = () => {
  const value = useSelector(contactsSelectors.getFilter);
  const dispath = useDispatch();

  return (
    <input
      className={s.input}
      placeholder="Find contacts by name"
      type="text"
      value={value}
      onChange={e => dispath(contactsActions.changeFilter(e.target.value))}
    />
  );
};
export default Filter;
