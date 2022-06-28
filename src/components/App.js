import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import Shop from './Shop/Shop';
import ShoppingCart from './ShoppingCart/ShoppingCart';

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
