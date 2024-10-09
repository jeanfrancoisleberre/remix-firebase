import React, { useContext, useState, useEffect } from "react";
import { auth } from "./firebase";
import { signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        setCurrentUser(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signOut = () => {
    auth.signOut();
    console.log(err);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    signInWithGoogle,
    signOut,
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}