import { Paper } from '@mui/material';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '60px' }}>
      <Paper elevation={3} style={{ padding: '32px', minWidth: '360px' }}>
        <LoginForm />
      </Paper>
    </div>
  );
};

export default LoginPage;



  
