import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  let navigate = useNavigate();

  // State to hold email and password
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = loginData;

  // Handle input change
  const onInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", loginData);
      
      // Assuming your backend returns a token upon successful login
      if (response.status === 200) {
        const { id, ...employeeDetails } = response.data;
        // Redirect to homepage or another protected route
        navigate(`/employee/${id}`, { state: { employee: employeeDetails } });
      }
    } catch (error) {
      console.error("Login failed", error.response.data);
      alert("Invalid credentials, please try again.");
    }
  };
  return (
    <div className="addUser">
      <h3>Sign in</h3>
      <form className="addUserForm" onsubmit={onSubmit}>
        <div className="inputGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your Email"
            value={email}
            onChange={onInputChange}
          />
          <label htmlFor="Password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter your Password"
            value={password}
            onChange={onInputChange}
          />
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </div>
      </form>
      <div className="login">
        <p>Don't have Account? </p>
        <Link to="/" type="submit" class="btn btn-success">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;