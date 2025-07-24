

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

      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          email: user.email,
          username: user.displayName || "",
          createdAt: new Date(),
        });
      }

      navigate("/"); 
    } catch (error) {
      alert("Erreur de connexion Google : " + error.message);
    }
  };

  return (
    <button onClick={handleGoogleLogin} className="btn btn-danger w-100 text-uppercase">
      Se connecter avec Google
    </button>
  );
}

export default GoogleAuthButton;
