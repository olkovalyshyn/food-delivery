import s from './navigation.module.css';

function Navigation() {
  return (
    <ul className={s.flex}>
      <li>Shop</li>
      <li className={s.psevdo}>Shopping Card</li>
    </ul>
  );
}

export default Navigation;
