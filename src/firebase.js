// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "robot-butler-chat.firebaseapp.com",
  databaseURL: "https://robot-butler-chat-default-rtdb.firebaseio.com",
  projectId: "robot-butler-chat",
  storageBucket: "robot-butler-chat.appspot.com",
  messagingSenderId: "820365518168",
  appId: "1:820365518168:web:4bf751ef95270c2cf2712d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create a root reference
export const db = getDatabase(app);
