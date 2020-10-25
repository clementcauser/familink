import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzcbZBf171KmrN5bHx2YKVrERVK7G8jTI",
  authDomain: "familink-095021.firebaseapp.com",
  databaseURL: "https://familink-095021.firebaseio.com",
  projectId: "familink-095021",
  storageBucket: "familink-095021.appspot.com",
  messagingSenderId: "94358709975",
  appId: "1:94358709975:web:156fd16f018794749c3292",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

export { firebase, firestore };
