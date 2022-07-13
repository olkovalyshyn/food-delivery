import s from './ShoppingCartSubmit.module.css';

function ShoppingCartSubmit(props) {
  return (
    <div className={s.flex}>
      <p>
        Total price:{' '}
        {props.onPrice.reduce((summ, item) => summ + item.price, 0)}
      </p>
      <button type="submit" className={s.button}>
        Submit
      </button>
    </div>
  );
}

export default ShoppingCartSubmit;
