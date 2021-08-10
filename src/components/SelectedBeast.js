import React from "react";
import { Modal, Button, Card} from "react-bootstrap/";
import "./select.css";





class SelectedBeast extends React.Component {

    

  render() {
    return (
      <div>

      <Modal  show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header>
          <Modal.Title>{this.props.beastList.title}</Modal.Title>
          <Card.Img
            variant="top"
            src={this.props.beastList.image_url}
            alt="horned"
            title="horned"
          />
        </Modal.Header>
        <Modal.Body>
            <Card.Text>{this.props.beastList.description}</Card.Text>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default SelectedBeast;
