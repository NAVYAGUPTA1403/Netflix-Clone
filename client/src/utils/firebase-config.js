import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

  const firebaseConfig = {
    apiKey: "AIzaSyDC2P1XczRogy7I_cQ6CgoG0sgJxRX6Vz8",
    authDomain: "react-netflix-clone-e0486.firebaseapp.com",
    projectId: "react-netflix-clone-e0486",
    storageBucket: "react-netflix-clone-e0486.appspot.com",
    messagingSenderId: "828546450392",
    appId: "1:828546450392:web:4031416a218eb28c2028ad",
    measurementId: "G-7R1T9RV9CR"
  };

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
