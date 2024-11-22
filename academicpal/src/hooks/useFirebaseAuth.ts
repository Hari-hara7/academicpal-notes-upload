import { useState, useEffect } from "react";
import { auth, provider } from "../services/firebaseConfig";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const useFirebaseAuth = () => {
  const [user, setUser] = useState<any>(null);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      if (!result.user.email.endsWith("@nmamit.in")) {
        alert("Only @nmamit.in emails are allowed.");
        signOut(auth);
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const signOutUser = async () => {
    await signOut(auth);
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return { user, signInWithGoogle, signOutUser };
};

export default useFirebaseAuth;
