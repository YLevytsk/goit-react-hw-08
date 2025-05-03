import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from '../../redux/contacts/operations';

import {
  selectFilteredContacts,
  selectLoading,
  selectError,
} from '../../redux/contacts/selectors';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';

import { Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import css from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    dispatch(addContact(newContact))
      .unwrap()
      .then(() => toast.success('Contact added!'))
      .catch(() => toast.error('Failed to add contact'));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast.success('Contact deleted'))
      .catch(() => toast.error('Failed to delete contact'));
  };

  return (
    <div className={css.container}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'primary.main' }}
      >
        <PhoneIcon />
        Phonebook
      </Typography>

      <div className={css.formsWrapper}>
  <div className={css.block}>
    <ContactForm onAdd={handleAddContact} />
  </div>
  <div className={css.block}>
    <SearchBox />
  </div>
</div>



      {loading && <p>Loading contacts...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ContactList contacts={contacts} onDelete={handleDeleteContact} />
    </div>
  );
};

export default ContactsPage;








  
