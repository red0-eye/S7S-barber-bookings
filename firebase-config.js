const firebaseConfig = {
  apiKey: "AIzaSyB3kuXFTYJGwa1eu2o1iWlYnrZNOhVuYR4",
  authDomain: "reservations-for-s7s.firebaseapp.com",
  projectId: "reservations-for-s7s",
  storageBucket: "reservations-for-s7s.firebasestorage.app",
  messagingSenderId: "708687050144",
  appId: "1:708687050144:web:cf960053c738d6f93260c5"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
