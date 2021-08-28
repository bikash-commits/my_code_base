import React from 'react';
import "../subtotal.css";
import { useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import {basketTotal} from './reducer';

function Subtotal({basket}) {
  const history = useHistory();
  const total = basketTotal(basket);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
          <p>
            Subtotal ({basket.length} items):
            <strong>{value}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" />This order contains a gift
          </small>
          </>
        )}
        descimalScale={2}
        value={total}
        displayType={"text"}
        thousandsSeparator={true}
        prefix={"$"}
        />
        <button onClick={e => history.push('/payment')}>proceed to checkout</button>
    </div>
  )
}

export default Subtotal;
