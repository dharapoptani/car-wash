import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDataStore } from "../StateProvider";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setUser, setLoggedIn } = useDataStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    axios
      .post("http://localhost:5000/login", data)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
        if (res.data.status === "success") {
          setUser(res.data.user);
          setLoggedIn(true);
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="center-container">
      <div className="container ">
        <div className="flex-left">
          <h1>Login</h1>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={emailRef}
            placeholder="Enter Your Email"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
            placeholder="Enter Your Password"
          />

          <button type="submit">Submit</button>
        </form>

        <h3 className="center">OR</h3>

        <NavLink to="/register" className="button">
          Register
        </NavLink>
        <NavLink to="/" className="button">
         Back
        </NavLink>
      </div>
    </div>
  );
};
export default Login;
