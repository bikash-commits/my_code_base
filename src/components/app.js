import React, { useEffect }from 'react'
import '../App.css';
import Header from './header';
import Payment from './payment';
import Home from './home';
import Orders from './orders';
import Checkout from './checkout';
import Login from './login';
import { useStateValue } from './state_provider';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe(
  "pk_test_51JQnQ8SEXq8mBNwtdyA0sxJL4tTPBiyVmOTYAqxQTTYGyfxp7YrzFc81ZHdmsjTJ72KQcDaboI5RAJ3WspTx3HaH00Eltoxa0T"
);

function App(){
  const [state, dispatch] = useStateValue();
    return (
      <Router>
        <div className="app__amazon">
          <Switch>
            <Route path="/login">
              <Header/>
              <Login />
            </Route>
            <Route path="/orders">
              <Header/>
              <Orders />
            </Route>
            <Route path="/checkout">
              <Header/>
              <Checkout />
            </Route>
            <Route path="/payment">
              <Header/>
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/">
              <Header/>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  };

  export default App;