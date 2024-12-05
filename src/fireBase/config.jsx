import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC8gh8xoXxI10gdVsMqQ7etW3Glvyq27nA",
    authDomain: "olx-project-25eeb.firebaseapp.com",
    projectId: "olx-project-25eeb",
    storageBucket: "olx-project-25eeb.appspot.com",
    messagingSenderId: "1002140618899",
    appId: "1:1002140618899:web:072831d2014cf3eb63bd66",
    measurementId: "G-NFKM7XE3Z9"
  };

export default firebase.initializeApp(firebaseConfig)