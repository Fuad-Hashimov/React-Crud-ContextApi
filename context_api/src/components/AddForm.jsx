import React, { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";

const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, email, address, phone);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="p-3">
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            required
          />
        </Form.Group>
        <Form.Group className="p-3">
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            required
          />
        </Form.Group>
        <Form.Group className="p-3">
          <Form.Control
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            as="textarea"
            placeholder="Address"
            row={4}
          />
        </Form.Group>
        <Form.Group className="p-3">
          <Form.Control
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
