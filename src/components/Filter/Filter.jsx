import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <input
        className={s.input}
        placeholder="Find contacts by name"
        type="text"
        value={value}
        onChange={onChange}
      />
      <span className={s.inputFocusFilter}></span>
    </>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
