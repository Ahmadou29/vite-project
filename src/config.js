// src/config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Configuration de ton projet Firebase via les variables d’environnement
const firebaseConfig = {
  apiKey: "AIzaSyDU51pVk_G_4oSaoCHgKBHYV5wrK6ycVeU",
authDomain: "vite-project-ca574.firebaseapp.com",
projectId: "vite-project-ca574",
storageBucket: "vite-project-ca574.firebasestorage.app",
messagingSenderId: "1034221414668",
appId: "1:1034221414668:web:a6e406f930689ec2474129"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // <-- Ajout Firestore

// console.log("VITE_API_KEY =>", import.meta.env.VITE_API_KEY);

const googleProvider = new GoogleAuthProvider();


// Exporter auth et provider
export { auth, googleProvider,db };

