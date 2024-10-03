import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
// import "./employeeDetails.css"; // Optional: Your styling

const EmployeeDetails = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployeeDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/employee/${id}`); // Adjust endpoint as needed
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching employee details", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployeeDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!employee) {
    return <div>No employee found!</div>;
  }

  return (
    <div className="employeeDetails">
      <h2>Employee Details</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>Gender</th>
            <th>DoB</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Position</th>
            <th>Dept</th>
            <th>Managed_By</th>
            {/* Add more fields as needed */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{employee.id}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.gender}</td>
            <td>{employee.dob}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.address}</td>
            <td>{employee.salary}</td>
            <td>{employee.position}</td>
            <td>{employee.dept}</td>
            <td>{employee.managed}</td>
            {/* Add more fields as needed */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetails;
