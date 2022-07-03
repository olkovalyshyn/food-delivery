import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Shop from './Shop/Shop';
import ShoppingCart from './ShoppingCart/ShoppingCart';

function App() {
  const [orders, setOrders] = useState([]);

  const addGoodToOrders = good => setOrders([...orders, good]);

  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<Shop onAdd={addGoodToOrders} />} />
        <Route
          path="/ShoppingCart"
          element={<ShoppingCart onCart={orders} />}
        />
      </Routes>
    </div>
  );
}

export default App;
