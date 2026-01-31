import React from "react";
import { useNavigate } from "react-router";

const LogoButton = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="text-3xl font-black text-purple-600 hover:text-purple-700 transition cursor-pointer tracking-tighter"
    >
      Olearn
    </div>
  );
};

export default LogoButton;
