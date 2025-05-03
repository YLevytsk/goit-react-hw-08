import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import Contact from '../Contact/Contact';
import { toast } from 'react-hot-toast';
import styles from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  const handleDelete = id => {
    const shouldDelete = window.confirm('Are you sure you want to delete this contact?');
    if (shouldDelete) {
      dispatch(deleteContact(id))
        .unwrap()
        .then(() => toast.success('Contact deleted successfully!'))
        .catch(() => toast.error('Failed to delete contact'));
    }
  };

  return (
    <div className={styles.gridContainer}>
      {contacts.map(contact => (
        <div key={contact.id} className={styles.gridItem}>
          <Contact contact={contact} onDelete={handleDelete} />
        </div>
      ))}
    </div>
  );
}



