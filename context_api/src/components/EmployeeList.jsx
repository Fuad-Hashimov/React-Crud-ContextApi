import React, { useContext } from "react";
import Employee from "./Employee";
import { EmployeeContext } from "../context/EmployeeContext";

const EmployeeList = () => {
  const context = useContext(EmployeeContext);
  const { employess } = context;
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <Employee employess={employess} />
      </tbody>
    </table>
  );
};
export default EmployeeList;
