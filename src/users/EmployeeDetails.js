import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
// import "./employeeDetails.css"; // Optional: Your styling

const EmployeeDetails = () => {
  const { state } = useLocation(); // Access the state passed from Login
  const { employee } = state; 
  const { id } = useParams(); // Get the ID from the URL

  if (!employee) {
    return <div>No employee data available!</div>;
  }

  return (
    <div className="employeeDetails">
      <h2>Employee Details for {employee.firstName} {employee.lastName}</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.address}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetails;
