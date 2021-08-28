import React from 'react'
import '../checkout_product.css'
import {Rating} from '@material-ui/lab';
import { useStateValue } from './state_provider';



function CheckoutProduct({basket, showRemveItemButton}) {
  const [state, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: basket.id,
    });
  };
  return (
    <div className='checkoutProduct'>
      <img className="checkoutProduct__image"src={basket.image} alt={basket.name}/>
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{basket.title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{basket.price}</strong>
        </p>
        <div className='checkoutProduct__rating'>
          <Rating name="size-small" defaultValue={basket.rating} size="small" />
        </div>
        {
          showRemveItemButton && 
          <button onClick={removeFromBasket}>Remove from Basket</button>
        }
      </div>
    </div>
  )
}

export default CheckoutProduct;