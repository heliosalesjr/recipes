import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDhDCF_rMmm6ZK3OA4mSZVF-g_qA__SmhM",
    authDomain: "recipes-3c4d2.firebaseapp.com",
    projectId: "recipes-3c4d2",
    storageBucket: "recipes-3c4d2.appspot.com",
    messagingSenderId: "819422942582",
    appId: "1:819422942582:web:25151f9992edfd0b74d657"
  };

  //init firebase

  firebase.initializeApp(firebaseConfig);

  //init services

  const projectFirestore = firebase.firestore();

  export { projectFirestore }