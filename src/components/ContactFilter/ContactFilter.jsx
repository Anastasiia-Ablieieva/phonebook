import { useDispatch, useSelector } from 'react-redux';
import { filtration } from 'redux/contacts/filterSlice';
import css from './ContactFilter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

    return (
        <label className={css.label} >
          Find contacts by name
          <input
            type="text"
            className={css.input} 
            value={filter} 
            onChange={e => dispatch(filtration(e.target.value))}
          />
        </label>
    );
  }
