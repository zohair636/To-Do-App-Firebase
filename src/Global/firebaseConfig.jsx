// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLnQtvirYIAvj_K4SpbWzTEi6wgjoamMI",
  authDomain: "to-do-app-firebase-a83e0.firebaseapp.com",
  projectId: "to-do-app-firebase-a83e0",
  storageBucket: "to-do-app-firebase-a83e0.appspot.com",
  messagingSenderId: "540178554999",
  appId: "1:540178554999:web:26d5d8464ced0f8027e672",
  measurementId: "G-CCDEQSW3PD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app;
export { db };
