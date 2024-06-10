// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB885bsvrY8pflB9c4Dl-RmE-PfQ4s0edA",
  authDomain: "otp-verification-62509.firebaseapp.com",
  projectId: "otp-verification-62509",
  storageBucket: "otp-verification-62509.appspot.com",
  messagingSenderId: "813396579554",
  appId: "1:813396579554:web:3c5097a888341f6e833abb",
  measurementId: "G-B7N6W050Q2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)