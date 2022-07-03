import { useState } from 'react';
import s from './shoppingCartInputField.module.css';

function ShoppingCartInputField() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const hundleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'email':
        setEmail(event.currentTarget.value);
        break;
      case 'phone':
        setPhone(event.currentTarget.value);
        break;
      case 'address':
        setAddress(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={s.section}>
        <div className={s.flex}>
          <label className={s.label} htmlFor="name">
            Name:
            <input
              className={s.input}
              type="text"
              name="name"
              id="name"
              placeholder="input"
              value={name}
              onChange={hundleChange}
            ></input>
          </label>

          <label className={s.label} htmlFor="email">
            Email:
            <input
              className={s.input}
              type="email"
              name="email"
              id="email"
              placeholder="input"
              value={email}
              onChange={hundleChange}
            ></input>
          </label>

          <label className={s.label} htmlFor="phone">
            Phone:
            <input
              className={s.input}
              type="phone"
              name="phone"
              id="phone"
              placeholder="input"
              value={phone}
              onChange={hundleChange}
            ></input>
          </label>

          <label className={s.label} htmlFor="address">
            Address:
            <input
              className={s.input}
              type="text"
              name="address"
              id="address"
              placeholder="input"
              value={address}
              onChange={hundleChange}
            ></input>
          </label>
        </div>
      </div>
    </>
  );
}

export default ShoppingCartInputField;
