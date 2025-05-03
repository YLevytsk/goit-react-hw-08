import { useDispatch, useSelector } from 'react-redux';
import { setNameFilter, setPhoneFilter } from '../../redux/filters/slice';
import { selectNameFilter, selectPhoneFilter } from '../../redux/filters/selectors';

import { TextField, Button, Paper } from '@mui/material';
import styles from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);
  const phoneFilter = useSelector(selectPhoneFilter);

  const handleNameChange = (e) => {
    dispatch(setNameFilter(e.target.value));
  };

  const handlePhoneChange = (e) => {
    dispatch(setPhoneFilter(e.target.value));
  };

  // ✅ Кнопка активна, если хотя бы одно поле заполнено
  const isDisabled = !nameFilter.trim() && !phoneFilter.trim();

  return (
    <Paper elevation={3} className={styles.card}>
      <TextField
        label="Search by name"
        variant="outlined"
        size="small"
        value={nameFilter}
        onChange={handleNameChange}
        fullWidth
        className={styles.field}
      />
      <TextField
        label="Search by phone"
        variant="outlined"
        size="small"
        value={phoneFilter}
        onChange={handlePhoneChange}
        fullWidth
        className={styles.field}
      />
      <Button
        variant="contained"
        color="primary"
        type="button"
        className={styles.button}
        disabled={isDisabled} // ← вот здесь!
      >
        Search
      </Button>
    </Paper>
  );
}














