import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";

const ListUsers = () => {
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove("token");
    navigate("/");
  };
  return (
    <>
      <h1>ListUsers</h1>
      <button onClick={logout}> Sair </button>
    </>
  );
};

export default ListUsers;
