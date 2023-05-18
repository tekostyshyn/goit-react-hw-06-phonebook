import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import './App.scss';

export const App = () => {
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
