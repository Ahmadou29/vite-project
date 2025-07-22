// // src/components/GoogleAuthButton.jsx

// import React from "react";
// import { auth, googleProvider } from "../config";
// import { signInWithPopup } from "firebase/auth";

// function GoogleAuthButton() {
//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithPopup(auth, googleProvider);
//       alert("Connecté avec Google !");
//     } catch (error) {
//       alert("Erreur : " + error.message);
//     }
//   };

//   return (
//     <button onClick={handleGoogleSignIn} className="btn btn-danger w-100">
//       <i className="bi bi-google me-2"></i> Continuer avec Google
//     </button>
//   );
// }

// export default GoogleAuthButton;
// // src/components/GoogleAuthButton.jsx

import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../config";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function GoogleAuthButton() {
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Vérifie si l'utilisateur existe déjà dans Firestore
      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        // Crée un nouveau document utilisateur
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          username: user.displayName || "",
          createdAt: new Date(),
        });
      }

      navigate("/"); // Redirection vers l'accueil
    } catch (error) {
      alert("Erreur de connexion Google : " + error.message);
    }
  };

  return (
    <button onClick={handleGoogleLogin} className="btn btn-danger w-100">
      Se connecter avec Google
    </button>
  );
}

export default GoogleAuthButton;
