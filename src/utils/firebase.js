import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVVTpMYRyP5tKEiaRva3ioelFCOWjLfm4",
  authDomain: "cozmoo-8f7bd.firebaseapp.com",
  projectId: "cozmoo-8f7bd",
  storageBucket: "cozmoo-8f7bd.appspot.com",
  messagingSenderId: "869197707721",
  appId: "1:869197707721:web:7d205a9b4d6417b2465018",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
