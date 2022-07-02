import s from './shopGoods.module.css';
import addGood from '../../db/db';
import arrGoods from './arrGoods.json';

function ShopGoods() {
  return (
    <div className={s.section}>
      {arrGoods.map(item => (
        <div key={item.id} className={s.good}>
          <img src={item.photo} alt="foto of good" className={s.image} />
          <p className={s.nameGood}>{item.name}</p>
          <button type="submit" className={s.btn} onClick={addGood}>
            add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ShopGoods;
