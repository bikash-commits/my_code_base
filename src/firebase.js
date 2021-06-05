import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAimtISPWHa09de1rsDavTC9BvXOdwfyKg",
  authDomain: "instagram-9c65c.firebaseapp.com",
  databaseURL: "https://instagram-9c65c-default-rtdb.firebaseio.com",
  projectId: "instagram-9c65c",
  storageBucket: "instagram-9c65c.appspot.com",
  messagingSenderId: "175562665073",
  appId: "1:175562665073:web:9d5459944116c810323fd0",
  measurementId: "G-6TWSEMNJTK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };