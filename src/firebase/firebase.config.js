// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ6b7vTC89H3foDsDhAOwscfYGGwB1kqk",
  authDomain: "career-fairs.firebaseapp.com",
  projectId: "career-fairs",
  storageBucket: "career-fairs.appspot.com",
  messagingSenderId: "909504424835",
  appId: "1:909504424835:web:7510d05719a951352e64b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app