import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import CartBtn from './cartBtn';

export default function ProductList() {
  let [productList, setProductList] = useState([]);

  //useEffect hook
  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/Keipher-Mada/ProductList_API/refs/heads/main/shopProductList.json',
    )
      .then((response) => response.json())
      .then((data) => setProductList(data));
  }, []); // <==  Dependency Array

  return (
    //React Fragment簡寫
    <>
      <Title mainTitle='React Gacha shop' />

      <div className='container'>
        {productList.map((product) => (
          <React.Fragment key={product.id}>
            <div className='containerItem'>
              <Link to={'/product/' + product.id}>
                <img src={process.env.PUBLIC_URL + '/img/' + product.image} alt={product.name} />
              </Link>

              <div className='productName'>
                {product.name} - {product.price}元/件
              </div>

              <CartBtn productInfo={product} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
