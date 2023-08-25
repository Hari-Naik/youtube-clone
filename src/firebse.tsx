// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAVorEV7fXKiRDHtxi2nPi35ZejCLkSBwg",
  authDomain: "clone-47ee0.firebaseapp.com",
  projectId: "clone-47ee0",
  storageBucket: "clone-47ee0.appspot.com",
  messagingSenderId: "568923056249",
  appId: "1:568923056249:web:afa07cb7bf2e9a651acca8",
  measurementId: "G-QGGS967SN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore(app)

export {app, auth, db}