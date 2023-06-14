import { useDispatch, useSelector } from 'react-redux';
import { filtration } from 'redux/contacts/filterSlice';
import css from './ContactFilter.module.css';

export default function Filter () {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

    return (
      <form className={css.form}>
        <label className={css.label} >Find contacts by name</label>
          <input
            type="text"
            className={css.input} 
            value={filter} 
            onChange={e => dispatch(filtration(e.target.value))}
          />

      </form>

    );
  }
