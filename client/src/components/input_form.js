import React from 'react';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';
import {Col} from 'react-bootstrap';

export default class InputForm extends React.Component {

  constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { validated: false };

      }

  handleSubmit(key, evt){
  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }

  this.setState({validated:true});
}

render() {

  const validated = this.state.validated;

  return (
    <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Minimum Value</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Min"
            defaultValue="1"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Maximum Value</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Max Value"
            defaultValue="10"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label># of Iterations</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Iterations"
            defaultValue="10"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
              Enter a number of iterations.
          </Form.Control.Feedback>
        </Form.Group>
        </Form.Row>
        <Button type="submit">Submit form</Button>
    </Form>);



  }
}
