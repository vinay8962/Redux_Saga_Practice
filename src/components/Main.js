import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList } from '../redux/productAction';
import {useSelector} from 'react-redux'
import { useEffect } from 'react';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component", data);
  // const product = {
  //   name: 'i Phone',
  //   category: 'mobile',
  //   price: 10000,
  //   color: 'red'
  // }
  useEffect(() => {
    dispatch(productList())
  }, [])
  return (
    <div>
      {/* <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button> */}
      <div>
       </div>
      <div>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div>
       </div>

      <div>
      <div className="product-list"> {/* Apply product-list class */}
      {data.map((item) => (
        <div className="product-card" key={item.id}> {/* Apply product-card class */}
          <h1>{item.title}</h1>
          <p>Price: ${item.price}</p>
          <p>Description: {item.description}</p>
          <p>Category: {item.category}</p>
          <button
           onClick={() => dispatch(addToCart(item))}
          >Add To Cart</button>
          <button
           onClick={() => dispatch(removeToCart(item.id))}
          >Remove to cart</button>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
}

export default Main;
