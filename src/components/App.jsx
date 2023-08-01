import Container from './Container';
import Contacts from './Contacts';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setFilter } from 'redux/phonebookSlice';
import { addUser, getContacts, onRemoveContact } from 'redux/phonebookThunk';
import {
  selectContacts,
  selectFilter,
} from 'redux/selectors';

export default function App() {
  const user = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

   useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handleChangeFilter = evt => {
    dispatch(setFilter(evt.target.value));
  };

  const filterContacts = () => {
    return user.filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const formAddContact = contactData => {
    const isExistingContact = user.some(user => user.name === contactData.name);

    if (isExistingContact) {
      alert('This contact already exists!');
      return;
    }

    dispatch(addUser(contactData));
  };

  return (
    <Container>
      <h1>Phonebook</h1>

      <ContactForm
        formAddContact={formAddContact}
        contactsArr={user} />
      
      <h2>Contacts</h2>
      
      <Filter value={filter} handleChangeFilter={handleChangeFilter}/>
      
      <Contacts dispatch={dispatch} contact={filterContacts()} onRemoveContact={onRemoveContact}/>

    </Container>       
  );
}