import Title from './Title';
import { Link } from 'react-router-dom';
import CartBtn from './cartBtn';
import { CartContext } from './CartContext';
import { React, useContext } from 'react';

export default function Checkout() {
  let { cartItems } = useContext(CartContext);

  let cartEmpty = cartItems.length <= 0;
  let grandTotal = cartItems.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
  const freeShippingPrice = 99;

  return (
    <div>
      <Title mainTitle='Your cart' />

      {cartEmpty && (
        <div>
          There are no items in your cart!
          <br />
          <Link to='/'>Go get yourself some goodies</Link>
        </div>
      )}

      {!cartEmpty && (
        <div>
          <div id='cartSection'>
            {cartItems.map((product) => (
              <div key={product.id}>
                <img alt={product.name} src={process.env.PUBLIC_URL + '/img/' + product.image} />
                <div>{product.name}</div>
                <div>{product.description}</div>
                <div>Price: £{product.price}</div>
                <div>Amount: {product.quantity}</div>
                <CartBtn productInfo={product} />
              </div>
            ))}
          </div>
          <div id='checkoutSection'>
            <div>Your cart total is</div>
            <div>£{grandTotal}</div>

            {grandTotal >= freeShippingPrice ? (
              <div>Congratulation! We will provide free shipping for this order!!</div>
            ) : (
              <div>
                Orders above £{freeShippingPrice} receive free shipping, you are £
                {freeShippingPrice - grandTotal} away
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
