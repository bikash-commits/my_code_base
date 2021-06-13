import { product } from 'ramda'
import React from 'react'
import '../product.css'

function Product(props) {
  return (
    <div className="product">
      <div className="product__info">
        <span>{props.productName}</span>
        <p className="product__price">
          <small>$</small>
          <strong>{props.productPrice}</strong>
        </p>
        <div className="product__rating">
         { Array(props.rating).fill().map((_, i) => (
            <span role="img" aria-label="star">&#11088;</span>
          ))
          }
        </div>
      </div> 
      <img src={props.productImgUrl} className="product__image" alt="product-img"></img>
        <button>Add to Basket</button>
    </div>
  )
}

export default Product
