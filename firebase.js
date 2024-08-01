// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfF0QoQ0ObEwyC6tL7pyJ0EZWGpKP3-pI",
  authDomain: "inventory-management-6037e.firebaseapp.com",
  projectId: "inventory-management-6037e",
  storageBucket: "inventory-management-6037e.appspot.com",
  messagingSenderId: "719800557583",
  appId: "1:719800557583:web:45bb3606d07e394384c37a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
