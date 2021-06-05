import React, {useState} from 'react';
import {Button} from '@material-ui/core';
import { db, storage } from '../firebase';
import firebase from 'firebase'

const ImageUpload = (props) => {
  const [caption, setCaption] = useState('')
  const [image, setImage] = useState(null)
  const [progress, setProgress] = useState(0)
  const {username} = props
  
  const handleChange = (e) => {
    const uploadableImage = e.target.files[0]
    uploadableImage && setImage(uploadableImage);
  }

  const handleUpload = (e) => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('change_state', (snapshot) => {
      setProgress(Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100))
    },
    (error) => {
      console.log(error);
    },
    () => {
      storage.ref('images').child(image.name).getDownloadURL()
      .then((url) => {
        db.collection('posts').add({
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          caption: caption,
          imageUrl: url,
          username: username
        })
        setCaption('');
        setProgress(0);
        setImage(null);
      })
    }
    )
  }

  return (
    <div className="app__image_upload">
      {progress > 0 && <progress classname="app__image_upload_progress"value ={progress} max="100"></progress>}
      <input type="text"
        placeholder="Enter Your Caption ..."
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <input type="file" onChange={(e) => handleChange(e)}/>
      <Button variant="contained" disabled={!image} color="primary" onClick={(e) => handleUpload(e) }>
        Upload Image
      </Button>
    </div>
  );
}

export default ImageUpload;