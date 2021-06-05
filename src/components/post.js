import React, {useState, useEffect} from 'react';
import '../Post.css'
import Avatar from '@material-ui/core/Avatar';
import LikeButton from './like_button';
import { db } from '../firebase';
import firebase from 'firebase'
import { TextField, Button } from '@material-ui/core';

const Post = (props) => {
  const [comments, setcomments] = useState([]);
  const [comment, setComment] = useState('');
  const {postId, user} = props;

  const [like, setlike] = useState(false);
  const [likeCount, setlikeCount] = useState(0);
  const [iconColor, setIconColor] = useState('lightgrey');

  const onClick = (e) => {
    setlike(true);
    if(iconColor === 'red'){
      setIconColor('lightgrey');
      const count = likeCount > 0 ? (likeCount - 1) : 0
      setlikeCount(count);
    } else {
      setIconColor('red');
      setlikeCount(likeCount + 1);
    }
  }
  useEffect(() => {
    let unsubscribe;
    if(postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => {
          setcomments(snapshot.docs.map(doc => doc.data()));
        });
    }
    return () => {
      unsubscribe()
    };
  }, [postId])

  const postComment = (e) => {
    e.preventDefault();
    if (user){
      db.collection('posts').doc(postId).collection('comments').add({
        comment: comment,
        username: user.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      setComment('');
    } else {
      alert('please sign-in or sign-up to add comments')
    }
  }
  return (
    <center>
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={props.username}
          src="/static/images/avatar/1.jpg"
        />
        <h3 className="post__text">{props.username}</h3>
      </div>
      <img  onClick={(e) => onClick(e)} className="post__image" src={props.imageUrl} alt={props.username}/>
      {like && <LikeButton />}
      <h4 className="post__text">{`caption: ${props.caption}`} </h4>
      <div className="post__user_comments">
        {comments.map((comment) => 
          <div className="post__comment_message" key={comment.timestamp}>
            <strong className="post__commentor">{comment.username}</strong>
            <div>{comment.comment}</div>
          </div>
        )}
      </div>
      <form className="post__comments">
      <TextField
        id="outlined-basic"
        label="Your Comment"
        variant="outlined"
        size="small"
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="post__comment_input"
        >
        </TextField>
        <Button
          type="submit"
          onClick ={postComment}
          disabled={!comment}
          className="post__comment_button"
          variant="contained"
          color="primary"
        >Post</Button>
      </form>
    </div>
    </center>
  );
}

export default Post;