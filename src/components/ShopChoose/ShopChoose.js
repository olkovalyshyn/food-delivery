import s from './shopChoose.module.css';

function ShopChoose() {
  return (
    <div className={s.section}>
      <p className={s.title}>Shops:</p>
      <div className={s.flex}>
        <button className={s.btn}>Mc Donny</button>
        <button className={s.btn}>CFK</button>
        <button className={s.btn}>ets...</button>
        <button className={s.btn}>ets...</button>
        <button className={s.btn}>ets...</button>
      </div>
    </div>
  );
}

export default ShopChoose;
