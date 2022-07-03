import s from './ShoppingCartSubmit.module.css';

function ShoppingCartSubmit() {
  return (
    <div className={s.flex}>
      <p>Total price: 123</p>
      <button type="submit" className={s.button}>
        Submit
      </button>
    </div>
  );
}

export default ShoppingCartSubmit;
