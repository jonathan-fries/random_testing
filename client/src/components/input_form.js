import React from 'react';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';
import {Col} from 'react-bootstrap';
import {localRandom} from './shared/local_random';

export default class InputForm extends React.Component {

  constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { validated: false };

      }

  handleSubmit(key, evt){
  const form = event.currentTarget;
  var randoms;
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  else{
    var minimum = form.elements.minimum.value;
    var maximum = form.elements.maximum.value;
    var iterations = form.elements.iterations.value;
    randoms = localRandom(minimum, maximum, iterations);
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
            name="minimum"
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
            name="maximum"
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
            name="iterations"
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
