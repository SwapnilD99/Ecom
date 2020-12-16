import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyD37M8u8NtzAjmgmbqw8Qiy_fwk2kLlpU0",
    authDomain: "ecommwebsite-5d309.firebaseapp.com",
    databaseURL: "https://ecommwebsite-5d309.firebaseio.com",
    projectId: "ecommwebsite-5d309",
    storageBucket: "ecommwebsite-5d309.appspot.com",
    messagingSenderId: "641994641459",
    appId: "1:641994641459:web:beea7f5e02b8ac5a929346",
    measurementId: "G-8NC0YKH4G3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();
  const auth = firebase.auth();

  export {db,auth};