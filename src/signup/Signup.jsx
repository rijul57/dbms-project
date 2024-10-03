import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

const Signup = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    firstName:"", 
    lastName:"", 
    email:"", 
    phone:"", 
    address:"", 
    pass:""
  });

  const {firstName, lastName, gender, dob, email, phone, address, salary, position, dept, managed, pass} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/submit", user);
    navigate("/");
  };
  return (
    <div className="addUser">
      <h3>Sign Up</h3>
      <form  onSubmit={(e) => onSubmit(e)} className="addUserForm">
        <div className="inputGroup">
        <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            autoComplete="off"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => onInputChange(e)}
          />
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="text"
            name="lastName"
            autoComplete="off"
            placeholder="Enter Last Name"
            value={lastName}
            onChange={(e) => onInputChange(e)}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
         <label htmlFor="email">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            autoComplete="off"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => onInputChange(e)}
          />
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            autoComplete="off"
            placeholder="Enter Address"
            value={address}
            onChange={(e) => onInputChange(e)}
          />
          <label htmlFor="pass">Password:</label>
          <input
            type="password"
            id="pass"
            name="pass"
            autoComplete="off"
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => onInputChange(e)}
          />
          <button type="submit" class="btn btn-success">
            Sign Up
          </button>
        </div>
      </form>
      <div className="login">
        <p>Already have an Account? </p>
        <Link to="/login" type="submit" class="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;