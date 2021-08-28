import React from 'react'
import '../header.css'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import {auth} from '../firebase';
import { useStateValue } from './state_provider';

function Header() {
  const [state, dispatch] = useStateValue();
  const {user, basket} = state;
   const handleAuthentication = (e) => {
    if(user){
      auth.signOut();
      dispatch({
        type: "SET_USER",
        user:  null
      })
    }
   }

  return (
    <div className="header">
      <Link to="/">
      <img className="header__logo" src="https://www.pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo"/>
      </Link>
      <div className="header__search">
        <input className="header__searchInput"
          type="text"
         />
         <SearchIcon className="header__searchIcon"/>
      </div>
      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__option-line-1">{user ? `Hello ${user?.email.split('@')[0]}` : 'Hello Guest'}</span>
            <span className="header__option-line-2">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        <Link to={'/orders'}>
          <div className="header__option">
            <span className="header__option-line-1">Returns</span>
            <span className="header__option-line-2"> & Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__option-line-1">Your</span>
          <span className="header__option-line-2">Prome</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
          <span className="header__option-line-2 header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
