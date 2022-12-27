import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDataStore } from "../StateProvider";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const cpasswordRef = useRef();
  const { user, setUser } = useDataStore();

  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      cpassword: cpasswordRef.current.value,
    };

    console.log(data);
    if (
      data.name &&
      data.email &&
      data.password &&
      data.password === data.cpassword
    ) {
      axios
        .post("http://localhost:5000/register", data)
        .then((res) => {
          alert(res.data.message);
          if (res.data.status === "success") {
            console.log(res.data.user);
            setUser(res.data.user);
            navigate("/login");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Data is invalid");
    }
  };

  return (
    <div className="center-container">
      <div className="container">
        <div className="flex-left">
          <h1>Register</h1>
          {/* <ArrowBackIcon /> */}
        </div>

        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={nameRef}
            placeholder="Enter Your Name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            ref={emailRef}
            placeholder="Enter Your Email"
          />
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
            placeholder="Enter Your Password"
          />

          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            ref={cpasswordRef}
            placeholder="Re-enter Your Password"
          />

          <button type="submit">Submit</button>
        </form>

        <h3 className="center">OR</h3>

        <NavLink to="/login" className="button">
          Login
        </NavLink>
        <NavLink to="/" className="button">
          Back
        </NavLink>
      </div>
    </div>
  );
};

export default Register;
