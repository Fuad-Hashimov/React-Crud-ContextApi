import React from "react";
import { Button, Form } from "react-bootstrap";

const AddForm = () => {
  return (
    <div>
      <Form>
        <Form.Group  className='p-3'>
          <Form.Control type="text" placeholder="Name" required />
        </Form.Group>
        <Form.Group  className='p-3'>
          <Form.Control type="text" placeholder="Email" required />
        </Form.Group>
        <Form.Group  className='p-3'>
          <Form.Control as="textarea" placeholder="Address" row={4} />
        </Form.Group>
        <Form.Group className='p-3'>
          <Form.Control type="text" placeholder="Phone" />
        </Form.Group>
        <Button className='m-3' variant="success" type="submit" block>
          Add New Employee
        </Button>
      </Form>
    </div>
  );
};
export default AddForm;
