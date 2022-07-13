import ShoppingCartInputField from '../ShoppingCartInputField/ShoppingCartInputField';
import ShoppingCartChoosedGood from '../ShoppingCartChoosedGood/ShoppingCartChoosedGood';
import ShoppingCartSubmit from '../ShoppingCartSubmit/ShoppingCartSubmit';

import s from './shoppingCart.module.css';

function ShoppingCart(props) {
  return (
    <form>
      <div className={s.flex}>
        <ShoppingCartInputField />
        <ShoppingCartChoosedGood onCart={props.onCart} />
      </div>
      <ShoppingCartSubmit onPrice={props.onCart} />
    </form>
  );
}

export default ShoppingCart;
