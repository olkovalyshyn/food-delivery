import ShoppingCartInputField from '../ShoppingCartInputField/ShoppingCartInputField';
import ShoppingCartChoosedGood from '../ShoppingCartChoosedGood/ShoppingCartChoosedGood';

import s from './shoppingCart.module.css';

function ShoppingCart() {
  return (
    <>
      <div className={s.flex}>
        <ShoppingCartInputField />
        <ShoppingCartChoosedGood />
      </div>
    </>
  );
}

export default ShoppingCart;
