// Navigation.jsx
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.link}>
        <Button variant="text" color="primary">Home</Button>
      </NavLink>
      <NavLink to="/contacts" className={css.link}>
        <Button variant="text" color="primary">Contacts</Button>
      </NavLink>
    </nav>
  );
};

export default Navigation;



