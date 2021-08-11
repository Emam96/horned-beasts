import React from "react";
import {Form, FloatingLabel} from "react-bootstrap/";

class Filter extends React.Component {


  render() {
    return (
      <div>
        <Form onChange={this.props.filterBeasts}>
          <FloatingLabel controlId="floatingSelect" label="Filter By Horns">
            <Form.Select aria-label="Floating label select example">
              <option>ALL</option>
              <option value= "1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">Over-Horned</option>
            </Form.Select>
          </FloatingLabel>
        </Form>
      </div>
    );
  }
}

export default Filter;
