import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCR1KiPk6VzzH1ir80vzPbyES-iVFUYqns",
  authDomain: "clone-16c85.firebaseapp.com",
  projectId: "clone-16c85",
  storageBucket: "clone-16c85.appspot.com",
  messagingSenderId: "452887200877",
  appId: "1:452887200877:web:8a2d6f65c6025cf453ab64",
  measurementId: "G-C3BG79X1B3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
