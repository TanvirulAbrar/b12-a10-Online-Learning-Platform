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
import { addressOfServer } from "../component/address";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setloading] = useState(true);
  const [enroll, setenroll] = useState([]);
  const [enrollid, setenrollid] = useState("");
  const [enrolldata, setenrolldata] = useState(null);

  const [user, setuser] = useState(null);
  const [userdata, setuserdata] = useState([]);
  const creatUser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      const poste = () => {
        const newCourse = {
          email: currentUser?.email,
          enrolled: [],
        };
        axios
          .post(`${addressOfServer}/enroll`, newCourse)
          .then((res) => {
            const data = res.data;
            setenrolldata(data);
            setenroll([]);
            console.log(data);
            console.log(data.insertedId);
            // console.log(enrollid);
          })
          .catch((error) => {
            console.error(error);
          });
      };
      const enrollToDb = () => {
        axios
          .get(`${addressOfServer}/enroll?email=${currentUser.email}`)
          .then((res) => {
            const data = res.data[0];
            console.log(data);
            if (data) {
              setenrollid(data._id);
              setenrolldata(null);
              setenroll(data.enrolled);
              console.log(data.enrolled);
              // console.log(data);
            } else {
              poste();
            }
          })
          .catch((error) => {
            console.error(error);
          });
      };
      if (currentUser) {
        setTimeout(enrollToDb, 300);
      }

      setloading(false);
    });

    return () => {
      unsubscibe();
    };
  }, []);
  useEffect(() => {
    if (enrolldata && enrolldata.insertedId != enrollid) {
      console.log("typeof enrollid:", typeof enrolldata.insertedId);
      setenrollid(enrolldata.insertedId);
    }
    console.log("Updated enrollid:", enrollid);
  }, [enrolldata]);
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
    setenrolldata(null);
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
    setenroll,
    enroll,
    setenrollid,
    enrollid,
  };
  return (
    <div>
      <AuthContext value={authinfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
