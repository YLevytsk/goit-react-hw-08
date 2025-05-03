import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';

import { Box, Typography, Button } from '@mui/material';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        flexWrap: 'wrap',
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: 500 }}>
        Welcome, {user.name}!
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </Button>
    </Box>
  );
}



