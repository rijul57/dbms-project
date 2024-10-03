import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
// import "./employeeDetails.css"; // Optional: Your styling

const ClientDetails = () => {
  const { state } = useLocation(); // Access the state passed from Login
  const { client } = state; 
  const { id } = useParams(); // Get the ID from the URL

  if (!client) {
    return <div>No client data available!</div>;
  }

  return (
    <div className="clientdetails">
      <h2>client Details for {client.firstName} {client.lastName}</h2>
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
            <td>{client.firstName}</td>
            <td>{client.lastName}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td>{client.address}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default clientDetails;
