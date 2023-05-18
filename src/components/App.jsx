import { useEffect } from 'react';

import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import './App.scss';

const getDataFromStorage = () => {
  const storedContacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(storedContacts);
  if (!parsedContacts) {
    return [];
  }
  return [...parsedContacts];
};

export const App = () => {
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = (name, number) => {
  //   const contacts = useSelector(getContacts);
  //   const checkedContacts = contacts.find(contact => contact.name === name);
  //   if (checkedContacts) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }

  //   const dispatch = useDispatch();
  //   dispatch(addContact(name, number));
  // };

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <Form/>
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
