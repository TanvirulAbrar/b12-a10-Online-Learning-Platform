import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const useAuth = () => {
  const data = useContext(AuthContext);
  return data;
};

export default useAuth;
