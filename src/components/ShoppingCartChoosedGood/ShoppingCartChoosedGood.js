import { useState } from 'react';
import s from './shoppingCartChoosedGood.module.css';

function ShoppingCartChoosedGood(props) {
  // const [countGood, setCountGood] = useState('1');
  // const handleChangeCountGood = event => {
  //   setCountGood(event.currentTarget.value);
  // };

  return (
    <div className={s.section}>
      {props.onCart.map(item => (
        <div key={item.id} className={s.good}>
          <img src={item.photo} alt="foto of good" className={s.image} />

          <div className={s.goodInfo}>
            <p className={s.nameGood}>{item.name}</p>
            <p className={s.nameGood}>Price: {item.price}</p>
            <input
              className={s.input}
              type="number"
              // value={countGood ? countGood : 1}
              // onChange={handleChangeCountGood}
              min="1"
            ></input>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCartChoosedGood;
