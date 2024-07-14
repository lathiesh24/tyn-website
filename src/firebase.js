// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJQjJicnq3QA08uhyaXJwNAJSHYkkH44Q",
  authDomain: "tyn-event-registration.firebaseapp.com",
  projectId: "tyn-event-registration",
  storageBucket: "tyn-event-registration.appspot.com",
  messagingSenderId: "560345960002",
  appId: "1:560345960002:web:e57e51b877aab008e627db",
  measurementId: "G-QRRLMVNFDS",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
