import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/contactsSlice';
import { getContacts } from 'components/redux/selectors';

import { nanoid } from 'nanoid';
import './Form.scss';

const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const nameValue = form.elements.name.value;
    const numberValue = form.elements.number.value;

    const checkedContacts = contacts.find(
      contact => contact.name === nameValue
    );
    if (checkedContacts) {
      alert(`${nameValue} is already in contacts`);
      return;
    }

    dispatch(addContact(nameValue, numberValue));
    form.reset();
  };

  const nameInpudId = nanoid();
  const numberInpudId = nanoid();
  return (
    <form action="" onSubmit={handleSubmit} className="form">
      <label htmlFor={nameInpudId} className="form__label">
        Name
      </label>
      <input
        className="form__input"
        type="text"
        name="name"
        id={nameInpudId}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={numberInpudId} className="form__label">
        Number
      </label>
      <input
        className="form__input"
        type="tel"
        name="number"
        id={numberInpudId}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className="form__button" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;
