import Contact from 'components/Contact';

import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/contactsSlice';
import { getContacts } from 'components/redux/selectors';
import { getFilter } from 'components/redux/selectors';

import './ContactsList.scss';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <ul className="contacts-list">
        {visibleContacts.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number}>
            <button
              className="contacts-list__button"
              type="button"
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </button>
          </Contact>
        ))}
      </ul>
    </>
  );
};

export default ContactsList;
