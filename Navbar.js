import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useDataStore } from "../StateProvider";

const Navbar = () => {
  const { user, setUser, setLoggedIn, loggedIn } = useDataStore();
  return (
    <nav className="navbar">
      <h1 className="logo">CarWash</h1>

      <div className="nav-left">
        {loggedIn ? (
          <>
            <p className="name">{user.name}</p>
            <p className="name">( Role : {user.role})</p>
            <button
              onClick={() => {
                setLoggedIn(false);
                setUser(null);
                alert("Logged Out Successfully");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="link">
              Login
            </NavLink>
            <NavLink to="/register" className="link">
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
