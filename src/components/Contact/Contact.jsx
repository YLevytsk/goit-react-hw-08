import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact, deleteContact } from '../../redux/contacts/operations';
import EditContactModal from '../EditContactModal/EditContactModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import { toast } from 'react-hot-toast';

import {
  Card,
  Typography,
  Box,
  IconButton,
  Stack,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';

import styles from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleEdit = () => setIsEditing(true);
  const handleCloseEdit = () => setIsEditing(false);

  const handleSave = async (id, values) => {
    try {
      await dispatch(updateContact({ id, ...values })).unwrap();
      toast.success('Contact updated');
    } catch {
      toast.error('Failed to update contact');
    } finally {
      setIsEditing(false);
    }
  };

  const handleDeleteClick = () => setIsDeleting(true);

  const handleConfirmDelete = async () => {
    try {
      await dispatch(deleteContact(contact.id)).unwrap();
      toast.success('Contact deleted');
    } catch {
      toast.error('Failed to delete contact');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCancelDelete = () => setIsDeleting(false);

  return (
    <>
      <Card className={styles.card}>
        <Box>
          <Stack direction="row" alignItems="center" spacing={1}>
            <PersonIcon color="primary" fontSize="small" />
            <Typography variant="h6">{contact.name}</Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1} mt={1}>
            <PhoneIcon color="primary" fontSize="small" />
            <Typography variant="body1">{contact.number}</Typography>
          </Stack>
        </Box>

        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          mt={3}
        >
          <IconButton color="primary" onClick={handleEdit}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={handleDeleteClick}>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Card>

      {isEditing && (
        <EditContactModal
          contact={contact}
          onClose={handleCloseEdit}
          onSave={handleSave}
        />
      )}

      {isDeleting && (
        <DeleteModal
          isOpen={isDeleting}
          onClose={handleCancelDelete}
          onConfirm={handleConfirmDelete}
          contactName={contact.name}
        />
      )}
    </>
  );
}




