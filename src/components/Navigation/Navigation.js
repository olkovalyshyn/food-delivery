import { NavLink } from 'react-router-dom';
import s from './navigation.module.css';

function Navigation() {
  return (
    <ul className={s.flex}>
      <li>
        <NavLink to="/" className={s.link}>
          Shop
        </NavLink>
      </li>

      <li className={s.psevdo}>
        <NavLink to="/ShoppingCart" className={s.link}>
          Shopping Cart
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
