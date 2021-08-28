import React, {useState, useEffect} from 'react'
import '../orders.css'
import {db} from '../firebase';
import { useStateValue } from './state_provider';
import Order from './order';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{user}] = useStateValue();

  useEffect(() => {
    if (user){
    db.collection('users')
    .doc(user?.uid)
    .collection('orders')
    .orderBy('created', 'desc')
    .onSnapshot(snapshot => {
      setOrders(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
    } else {
      setOrders([]);
    }
  }, [])
  return (
    <div>
      <h1>my orders</h1>
      {user &&
      <div className="oreders__order">
        {orders?.map(order => (
          <Order order={order}/>
        ))}
      </div>
    }
    <h3>Login to see your past orders</h3>
    </div>
  )
}

export default Orders
