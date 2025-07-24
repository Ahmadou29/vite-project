import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../config";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function GoogleAuthButton() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
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

      toast.success("Connexion Google réussie !");
      navigate("/accueil");
    } catch (error) {
      toast.error("Erreur de connexion Google : " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleGoogleLogin} className="btn btn-danger w-100" style={{backgroundColor:'red', color:'white'}} disabled={loading}>

      {loading ? "Connexion en cours..." : "Se connecter avec Google"}
    </button>
  );
}

export default GoogleAuthButton;