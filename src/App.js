import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Checkout from './Checkout';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import { CartContext } from './CartContext';
import { React, useState } from 'react';

function App() {


    const [cartItems, setCartItems] = useState([])

  return (
    <BrowserRouter>

      <CartContext.Provider value={{cartItems, setCartItems}}>
        <Link to='/'>home page</Link>
        <Link to='/Checkout'>cart</Link>
        <Link to='/ProductDeatil'>info</Link>

        <Routes>
          <Route path='/' element={<ProductList />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/Product' element={<ProductDetail />}>
            <Route path=':id' element={<ProductDetail />} />
          </Route>

          <Route path='*' element={<p>page does not exist</p>} />
        </Routes>
      </CartContext.Provider>

    </BrowserRouter>
  );
}

export default App;
