import s from './shop.module.css';
import ShopChoose from '../ShopChoose/ShopChoose';
import ShopGoods from '../ShopGoods/ShopGoods';

function Shop() {
  return (
    <>
      <div className={s.flex}>
        <ShopChoose />
        <ShopGoods />
      </div>
    </>
  );
}

export default Shop;
