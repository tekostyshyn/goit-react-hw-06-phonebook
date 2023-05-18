import { useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/filterSlice';

import { nanoid } from 'nanoid';
import './Filter.scss';

const Filter = () => {
  const inputId = nanoid();
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <label className="filter__label" htmlFor={inputId}>
        Find contacts by name
      </label>
      <input
        className="filter__input"
        type="text"
        name="input"
        id={inputId}
        onChange={e => {
          dispatch(setFilter(e.target.value));
        }}
      />
    </div>
  );
};

export default Filter;
