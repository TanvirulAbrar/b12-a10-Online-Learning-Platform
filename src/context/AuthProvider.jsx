import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setloading] = useState(true);

  const [user, setuser] = useState(null);
  const [userdata, setuserdata] = useState([]);
  const creatUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);

      setloading(false);
    });
    return () => {
      unsubscibe();
    };
  }, []);
  const updateUser = (data) => {
    return updateProfile(auth.currentUser, data);
  };
  const signinWthGoogle = () => {
    setloading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signin = (email, password) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const forgetPassWord = (email) => {
    setloading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const signoutUser = () => {
    setloading(true);
    return signOut(auth);
  };
  const authinfo = {
    user,
    creatUser,
    signin,
    forgetPassWord,
    signoutUser,
    loading,
    updateUser,
    signinWthGoogle,
    userdata,
    setuserdata,
    setloading,
  };
  return (
    <div>
      <AuthContext value={authinfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
