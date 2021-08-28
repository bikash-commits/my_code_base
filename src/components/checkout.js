import React from 'react'
import '../checkout.css'
import Subtotal from './subtotal';
import { useStateValue } from './state_provider';
import CheckoutProduct from './checkout_product';
import { isEmpty } from 'ramda';
function Checkout(){
  const [{ basket }] = useStateValue();
  return(
    <div className="checkout">
      <div className="checkout__left">
        <img
         className="checkout__ad"
         src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
         alt="checkout_ad"
        />
        {
          isEmpty(basket)
          ? <h5>Your Amazon Cart is empty.</h5>
          :
          (<div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.map(item => (
              <CheckoutProduct
                basket={item}
                key={item.id}
              />
            ))}
          </div>)
        }
      </div>
        <div className="checkout__right">
          <Subtotal basket = {basket} />
        </div>
    </div>
  );
}

export default Checkout;
