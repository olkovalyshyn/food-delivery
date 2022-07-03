import s from './shop.module.css';
import ShopChoose from '../ShopChoose/ShopChoose';
import ShopGoods from '../ShopGoods/ShopGoods';

function Shop(props) {
  return (
    <>
      <div className={s.flex}>
        <ShopChoose />
        <ShopGoods onAdd={props.onAdd} />
      </div>
    </>
  );
}

export default Shop;
