import React, { useState, useEffect } from 'react';
import '../App.css';
import Post from './post';
import { db, auth, storage } from '../firebase';
import SignUpModal from './sign_up_modal';
import SignInModal from './sign_in_modal';
import ImageUpload from './image_upload';

function App(){
const [posts, setPosts] = useState([]);
const [user, setUser] = useState([]);

useEffect(() => {
  auth.onAuthStateChanged((authUser) => {
    if(authUser){
      setUser(authUser)
    } else {
      setUser(null)
    }
  })
}, [user])

  useEffect(() => {
   db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
     setPosts(snapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
      })));
    })
  }, []);
    return (
    <div className='app'>
      <div className='app__header'>
        <img
          className='app__headerImage'
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=''>
        </img>
        {user?.displayName ? <ImageUpload classname='app__image_upload' username={user.displayName}/> : <h3>Login to continue</h3>}
        <div className="app__authButtons">
          <SignUpModal user ={user}/>
          <SignInModal user ={user}/>
        </div>
      </div>
     {posts && posts.map(post => {
        return (<Post caption={post.data.caption} imageUrl = {post.data.imageUrl} username={post.data.username} key={post.id} postId={post.id} user={user} />);
      })}
    </div>
    );
  };

  export default App;