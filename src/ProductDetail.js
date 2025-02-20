import { useParams, Link } from 'react-router-dom';
import Title from './Title';
import CartBtn from './cartBtn';
import { React, useState, useEffect } from 'react';

export default function ProductDetail() {
  let params = useParams();
  let [productDetail, setProductDetail] = useState(null);

  useEffect(() => {

    fetch(
      'https://raw.githubusercontent.com/Keipher-Mada/ProductList_API/refs/heads/main/shopProductList.json'
    )
      .then((response) => response.json())
      .then((data) => {
        let productInfo = data.find((element) => {
          return element.id === parseInt(params.id);
        });
        setProductDetail(productInfo);
      });
  }, [params.id]); // <==  Dependency Array

  return (
    <div>
      {productDetail && (
        <div className='ProductDetail'>
          <Title mainTitle={productDetail.name + 'product details'} />

          <div>
            <table width='100%'>
              <tbody>
                <tr>
                  <td align='right'></td>
                  <td width='45%'>
                    <p>Name : {productDetail.name}</p>
                    <p>Price : £ {productDetail.price}</p>
                    <p>Description : {productDetail.description}</p>
                    <br />
                    <CartBtn productInfo={productDetail} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      <Link to='/'>
        <div className='backToGoodsListBtn'>↩️ Back to product list</div>
      </Link>
    </div>
  );};

