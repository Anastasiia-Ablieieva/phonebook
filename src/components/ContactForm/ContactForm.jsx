import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contacts/operations';
import css from './ContactForm.module.css';
import Button from '@mui/material/Button';

export default function ContactForm() {

    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = e => {
        e.preventDefault();

        const contact = {
            name: e.currentTarget.elements.name.value,
            number: e.currentTarget.elements.number.value,
        };

        const isExist = contacts.find(({ name }) => name.toLowerCase() === contact.name.toLowerCase());

        if (isExist) {
            return alert(`A contact ${contact.name} is already in contacts.`);
        }

        dispatch(addContact(contact));
            e.currentTarget.reset();
    }

    return (
        <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.lable}>Name</label>
        <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces"
            required
        />
        <label className={css.lable}>Number</label>
        <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        <Button variant="outlined" type="submit">Add contact</Button>
      </form>
    )
}
