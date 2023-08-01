import PropTypes from 'prop-types';
import ContactsStyles from './ContactsStyles';
import Delete from '../Delete';


function Contacts({ contact = [], onRemoveContact, dispatch }) {
  
  return (
    <>
      <ContactsStyles>
        {contact.map(({ id, name, number }) => {
          return (
            <Delete
              key={id}
              id={id}
              name={name}
              number={number}
              onRemoveContact={onRemoveContact}
              dispatch={dispatch}
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
  onRemoveContact: PropTypes.func.isRequired,  
};

export default Contacts;