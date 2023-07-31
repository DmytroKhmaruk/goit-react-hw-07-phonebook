import PropTypes from 'prop-types';
import ContactsStyles from './ContactsStyles';
import Delete from '../Delete';

function Contacts({ contact, removeContact }) {
  const filteredContacts = contact || [];
  
  return (
    <>
      <ContactsStyles>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <Delete
              key={id}
              id={id}
              name={name}
              number={number}
              onRemoveContact={removeContact}
            />
          );
          
        })}
      </ContactsStyles>
    </>
  );
}

Contacts.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  removeContact: PropTypes.func.isRequired,  
};

export default Contacts;