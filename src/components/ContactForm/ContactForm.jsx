import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { toast } from 'react-hot-toast';

import { TextField, Button, Paper, Box } from '@mui/material';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(name.trim() && number.trim())) {
      toast.error('Please fill in both name and number');
      return;
    }

    dispatch(addContact({ name, number }))
      .unwrap()
      .then(() => {
        toast.success('Contact added successfully!');
        setName('');
        setNumber('');
      })
      .catch(() => toast.error('Failed to add contact'));
  };

  const isDisabled = !(name.trim() && number.trim());

  return (
    <Paper elevation={3} className={css.formCard}>
      <form onSubmit={handleSubmit} className={css.form}>
        <Box className={css.fieldGroup}>
          <TextField
            label="Name"
            name="name"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Box>

        <Box className={css.fieldGroup}>
          <TextField
            label="Number"
            name="number"
            size="small"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            fullWidth
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isDisabled}
        >
          Add Contact
        </Button>
      </form>
    </Paper>
  );
}








