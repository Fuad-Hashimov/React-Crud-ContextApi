import React, { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";

const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const { name, email, address, phone } = newEmployee;

  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, email, address, phone);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="p-3">
          <Form.Control
            name="name"
            value={name}
            onChange={(e) => onInputChange(e)}
            type="text"
            placeholder="Name"
            required
          />
        </Form.Group>
        <Form.Group className="p-3">
          <Form.Control
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
            type="text"
            placeholder="Email"
            required
          />
        </Form.Group>
        <Form.Group className="p-3">
          <Form.Control
            name="address"
            value={address}
            onChange={(e) => onInputChange(e)}
            as="textarea"
            placeholder="Address"
            row={4}
          />
        </Form.Group>
        <Form.Group className="p-3">
          <Form.Control
            name="phone"
            value={phone}
            onChange={(e) => onInputChange(e)}
            type="text"
            placeholder="Phone"
          />
        </Form.Group>
        <Button className="m-3" variant="success" type="submit" block>
          Add New Employee
        </Button>
      </Form>
    </div>
  );
};
export default AddForm;
