import s from './shopGoods.module.css';
import addGood from '../../db/db';

function ShopGoods() {
  return (
    <div className={s.section}>
      <div className={s.good}>
        <img src="" alt="foto of good" className={s.image} />
        <p className={s.nameGood}>Big big burger</p>
        <button className={s.btn} onClick={addGood}>
          add to Cart
        </button>
      </div>

      <div className={s.good}>
        <img src="" alt="foto of good" className={s.image} />
        <p className={s.nameGood}>Big big burger</p>
        <button className={s.btn} onClick={addGood}>
          add to Cart
        </button>
      </div>

      <div className={s.good}>
        <img src="" alt="foto of good" className={s.image} />
        <p className={s.nameGood}>Big big burger</p>
        <button className={s.btn} onClick={addGood}>
          add to Cart
        </button>
      </div>

      <div className={s.good}>
        <img src="" alt="foto of good" className={s.image} />
        <p className={s.nameGood}>Big big burger</p>
        <button className={s.btn} onClick={addGood}>
          add to Cart
        </button>
      </div>

      <div className={s.good}>
        <img src="" alt="foto of good" className={s.image} />
        <p className={s.nameGood}>Big big burger</p>
        <button className={s.btn} onClick={addGood}>
          add to Cart
        </button>
      </div>

      <div className={s.good}>
        <img src="" alt="foto of good" className={s.image} />
        <p className={s.nameGood}>Big big burger</p>
        <button className={s.btn} onClick={addGood}>
          add to Cart
        </button>
      </div>
    </div>
  );
}

export default ShopGoods;
