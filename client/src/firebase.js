// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-mern-71e70.firebaseapp.com",
  projectId: "blog-mern-71e70",
  storageBucket: "blog-mern-71e70.appspot.com",
  messagingSenderId: "741024536401",
  appId: "1:741024536401:web:f6cbf4ca62bccc5412a570"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
