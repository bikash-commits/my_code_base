import React from 'react'
import '../product.css'
import {Rating} from '@material-ui/lab';
import { useStateValue } from './state_provider';


function Product(props) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
        item: {
          id: props.id,
          title: props.productName,
          image: props.productImgUrl,
          price: props.productPrice,
          rating: props.rating,
        },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <span>{props.productName}</span>
        <p className="product__price">
          <small>$</small>
          <strong>{props.productPrice}</strong>
        </p>
        <div className="product__rating">
        <Rating name="size-small" defaultValue={props.rating} size="small" /></div>
      </div> 
      <img src={props.productImgUrl} className="product__image" alt="product-img"></img>
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
