import React from 'react'
import '../order.css'
import dayjs from 'dayjs'
import CheckoutProduct from '../components/checkout_product'

function Order({order}) {
  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{dayjs(order.data.created).format('DD-MM-YYYY, h:mm')}</p>
      <p>{order.data.basket?.map((item => (
        <div>
        <span className='order__id'>{`Order ID: ${item.id}`}</span>
        <CheckoutProduct basket={item} CheckoutProduct={false} ></CheckoutProduct>
        </div>
      )))}</p>
    </div>
  )
}

export default Order;

