
//   // Import the functions you need from the SDKs you need
// //   import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firebase.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
//   // Your web app's Firebase configuration
//   const firebaseConfig = {
//     apiKey: "AIzaSyDU51pVk_G_4oSaoCHgKBHYV5wrK6ycVeU",
//     database_URL: "https://vite-project-ca574-default-rtdb.firebaseio.com/",
//     authDomain: "vite-project-ca574.firebaseapp.com",
//     projectId: "vite-project-ca574",
//     storageBucket: "vite-project-ca574.firebasestorage.app",
//     messagingSenderId: "1034221414668",
//     appId: "1:1034221414668:web:a6e406f930689ec2474129"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

//   export const auth = getAuth(app);
// export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDU51pVk_G_4oSaoCHgKBHYV5wrK6ycVeU",
  authDomain: "vite-project-ca574.firebaseapp.com",
  projectId: "vite-project-ca574",
  storageBucket: "vite-project-ca574.appspot.com", // ✅ corrigé ici
  messagingSenderId: "1034221414668",
  appId: "1:1034221414668:web:a6e406f930689ec2474129"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
