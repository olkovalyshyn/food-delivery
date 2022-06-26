import s from './shoppingCartInputField.module.css';

function ShoppingCartInputField() {
  return (
    <>
      <div className={s.section}>
        <form className={s.flex}>
          <label className={s.label} for="name">
            Name:
            <input
              className={s.input}
              type="text"
              name="name"
              id="name"
              placeholder="input"
            ></input>
          </label>

          <label className={s.label} for="email">
            Email:
            <input
              className={s.input}
              type="email"
              name="email"
              id="email"
              placeholder="input"
            ></input>
          </label>

          <label className={s.label} for="phone">
            Phone:
            <input
              className={s.input}
              type="phone"
              name="phone"
              id="phone"
              placeholder="input"
            ></input>
          </label>

          <label className={s.label} for="address">
            Address:
            <input
              className={s.input}
              type="text"
              name="address"
              id="address"
              placeholder="input"
            ></input>
          </label>
        </form>
      </div>
    </>
  );
}

export default ShoppingCartInputField;
