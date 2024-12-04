// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVez3Z37DRLecNlmycFG3Kc1NTwH6eWeA",
  authDomain: "movie-portal-f7a8b.firebaseapp.com",
  projectId: "movie-portal-f7a8b",
  storageBucket: "movie-portal-f7a8b.firebasestorage.app",
  messagingSenderId: "53286642994",
  appId: "1:53286642994:web:fa4233f22a9125deeb632b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);