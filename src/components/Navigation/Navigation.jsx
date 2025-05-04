import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { selectIsLoggedIn } from '../../redux/auth/selectors'; 
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn); 

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={css.link}>
        <Button variant="text" color="primary">Home</Button>
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className={css.link}>
          <Button variant="text" color="primary">Contacts</Button>
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;




