// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getFirestore} from 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy7uz0tN2nCfeqKEJYmuIpWrJ-XA7mfqg",
  authDomain: "zoodom-app.firebaseapp.com",
  projectId: "zoodom-app",
  storageBucket: "zoodom-app.appspot.com",
  messagingSenderId: "187111444015",
  appId: "1:187111444015:web:97185e2e133fd2f77b80da",
  measurementId: "G-RV9GMMZR5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

