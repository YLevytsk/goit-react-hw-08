import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink to="/register" className={css.link}>
        <Button variant="outlined" color="secondary">Register</Button>
      </NavLink>
      <NavLink to="/login" className={css.link}>
        <Button variant="contained" color="primary">Log In</Button>
      </NavLink>
    </div>
  );
};

export default AuthNav;



