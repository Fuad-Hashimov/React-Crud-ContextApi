import React, { useContext, useState, useEffect } from "react";
import Employee from "./Employee";
import { EmployeeContext } from "../context/EmployeeContext";
import { Button } from "react-bootstrap";
import ModalForm from "./ModalForm";

const EmployeeList = () => {
  const { employess } = useContext(EmployeeContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [employess]);

  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success text-white"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>
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
          {
            employess.map(employee => (
              <tr key={employee.id}>
                <Employee employee={employee} />
              </tr>
            ))
          }
        </tbody>
      </table>
      <ModalForm show={show} handleClose={handleClose} />
    </>
  );
};
export default EmployeeList;
