import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA4c4m1nLWfSj5v9gXa7kybuYYnbNmD5_s",
  authDomain: "messenger-clone-react-js-app.firebaseapp.com",
  databaseURL: "https://messenger-clone-react-js-app.firebaseio.com",
  projectId: "messenger-clone-react-js-app",
  storageBucket: "messenger-clone-react-js-app.appspot.com",
  messagingSenderId: "523871807619",
  appId: "1:523871807619:web:cf4a02838fb1a1331ad3b6",
  measurementId: "G-P5LESS8ZZZ",
});

 const db = firebaseApp.firestore();
 export default db;