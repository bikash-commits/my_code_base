import React, { useState, useEffect } from 'react'
import '../payment.css';
import CheckoutProduct from './checkout_product';
import {useStateValue } from "./state_provider"
import {isEmpty} from 'ramda';
import { Link, useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format'
import {basketTotal} from './reducer';
import  axios from './axios';
import {db} from '../firebase';
import { CardElement , useStripe, useElements } from '@stripe/react-stripe-js';

function Payment() {
  const [{basket, user}, dispatch] = useStateValue();
  const history = useHistory();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `http://localhost:5001/clone-16c85/us-central1/api/payments/create?total=${basketTotal(basket) * 100}`,
      });
    
      setClientSecret(response.data.clientSecret);
    }
    getClientSecret();
  }, [basket])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

   const payload = await stripe.confirmCardPayment(clientSecret, {
     payment_method: {
     card: elements.getElement(CardElement)
     }
   }).then(({ paymentIntent }) => {
     db.collection('users')
     .doc(user?.uid).collection('orders')
     .doc(paymentIntent.id)
     .set({
       basket: basket,
       amount: paymentIntent.amount,
       created: paymentIntent.created
     })
     setSucceeded(true);
     setError(null);
     setProcessing(false);
     dispatch({
       type: 'EMPTY_BASKET'
     })
     if (user){
      history.replace('/orders')
     } else {
      history.replace('/')
     }
   })
  }

  const handleChange = (e) => {
   setDisabled(e.empty);
   setError(e.error ? e.error.message : ""); 
  }
  return (
    <div className='payment'>
      <div className="payment__container">
      <h1>Checkout(<Link to="/checkout" >{basket?.length} items</Link>)</h1>
        <div className="payment__section">
          <div className="payment__title">
            <h4>Delivery Address:</h4>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>Nabarangpur</p>
            <p>Odisha</p>
            <p>Pin : 764059 (IN)</p>
          </div>
        </div>
        {
          !isEmpty(basket) && <div className="payment__section">
            <div className="payment__title">
              <h3>Review Items and proceed to payment:-</h3>
            </div>
            <div className="payment__items">
              {basket.map(item => (
                <CheckoutProduct
                  basket={item}
                  key={item.id}
                />
              ))}
            </div>
          </div>
        }
        {
          !isEmpty(basket) && <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}/>
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>Order Total: {value}</h3>
                  )}
                  descimalScale={2}
                  value={basketTotal(basket)}
                  displayType={"text"}
                  thousandsSeparator={true}
                  prefix={"$"}
                />
                <button className='payment__button' disabled={ processing || disabled || succeeded }>
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>
              {error !== 0  && <div>{error}</div>}
            </form>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default Payment;
