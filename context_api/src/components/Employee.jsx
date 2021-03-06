import React, { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

const Employee = ({ employee }) => {
  const { removeEmployee } = useContext(EmployeeContext);

  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <button className="btn text-warning" data-toggle="modal">
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </button>
        <button
          onClick={() => removeEmployee(employee.id)}
          className="btn text-danger"
        >
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </button>
      </td>
    </>
  );
};
export default Employee;
