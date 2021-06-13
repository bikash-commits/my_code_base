import React from 'react'
import '../header.css'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src="https://www.pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo"/>
      <div className="header__search">
        <input className="header__searchInput"
          type="text"
         />
         <SearchIcon className="header__searchIcon"/>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__option-line-1">Hello</span>
          <span className="header__option-line-2">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__option-line-1">Returns</span>
          <span className="header__option-line-2"> & Orders</span>
        </div>
        <div className="header__option">
          <span className="header__option-line-1">Your</span>
          <span className="header__option-line-2">Prome</span>
        </div>
        <div className="header__optionBasket">
         <ShoppingBasketIcon />
         <span className="header__option-line-2 header__basketCount">0</span>
        </div>
      </div>
    </div>
  )
}

export default Header
