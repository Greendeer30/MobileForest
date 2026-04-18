const firebaseConfig = {
  apiKey: "AIzaSyDCJevVaXqyxUjWLdeaqXrXmUEw5POjSEY",
  authDomain: "dukeforest-96e53.firebaseapp.com",
  projectId: "dukeforest-96e53",
  storageBucket: "dukeforest-96e53.firebasestorage.app",
  messagingSenderId: "807394176812",
  appId: "1:807394176812:web:f3b887fc8c5df9c6efc689",
  measurementId: "G-N4C8G3HFNC"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
