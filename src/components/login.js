import React from 'react'
import { useState } from 'react';
import '../login.css'
import { Link, useHistory } from 'react-router-dom';
import {auth} from '../firebase';
import { useStateValue } from './state_provider';

function Login() {
  const [email, setEmail] = useState('');
  const history = useHistory();
  const [password, setPassword] = useState('');
  const [state, dispatch] = useStateValue();


  const signin = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then((authUser) => {
      if(authUser){
        dispatch({
          type: "SET_USER",
          user:  authUser.user ?  authUser.user : null
        })
      history.push('/')
      }
    })
    .catch((error) => {
      dispatch({
      type: "SET_USER",
      user:  null
    })
    alert(error.message);
    })
  }

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      history.push('/')
    })
    .catch((error) => alert(error.message));
  }
  return (
    <div className="login">
      <Link to='/'>
          <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="amzon-logo" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>

          <h5>Password</h5>
          <input type="password" value={password} onChange= {(e) => setPassword(e.target.value)}></input>
          <button onClick={(e) => signin(e)} className="login__signinButton">Sign in</button>
        </form>
        <p>By signing in you agree to the buying policy of this app</p>
        <button className='login__registerButton' onClick={register}>Create Your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
