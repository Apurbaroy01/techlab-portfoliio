// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz8R2bN3D7IGu7GUkwiGEmzDier3o0d3Y",
  authDomain: "techlab-portfolio-3027c.firebaseapp.com",
  projectId: "techlab-portfolio-3027c",
  storageBucket: "techlab-portfolio-3027c.firebasestorage.app",
  messagingSenderId: "340118624369",
  appId: "1:340118624369:web:8c2ac19f95c0e661fc63d0",
  measurementId: "G-NYEMK5RY9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;