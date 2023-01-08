import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBTt5YsaFreJcYgnVj0Htc_TeuOKZxXqOk",
  authDomain: "miniblog-15ff7.firebaseapp.com",
  projectId: "miniblog-15ff7",
  storageBucket: "miniblog-15ff7.appspot.com",
  messagingSenderId: "415143563007",
  appId: "1:415143563007:web:bac811541ea20ee32546ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }