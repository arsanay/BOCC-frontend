import firebase from'firebase/app'
import 'firebase/firestore'
// Initialize Firebase
 var config = {
    apiKey: "AIzaSyABtDqF_Q7KvASvYKqyUX9h0XvwaMJhnVA",
    authDomain: "bocc-cbdb0.firebaseapp.com",
    databaseURL: "https://bocc-cbdb0.firebaseio.com",
    projectId: "bocc-cbdb0",
    storageBucket: "bocc-cbdb0.appspot.com",
    messagingSenderId: "659935673114"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true})