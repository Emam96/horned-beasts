/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
    };
  }

  increaseVotes = () => {
    this.setState({
      votes: this.state.votes + 1,
    });
  };

  
  
  showModal = () => {
    this.props.showModal(this.props.title);
  };


  render() {
    return (
      <>
        <Card  style={{ width: "20rem" }}>
          <Card.Title onClick={this.showModal}>{this.props.title}</Card.Title>
          <Card.Img
          onClick={this.showModal}
            variant="top"
            src={this.props.imageUrl}
            alt="horned"
            title="horned"
          />
          <Card.Body onClick={this.showModal}>
            <Card.Text># of votes ❤ = {this.state.votes}</Card.Text>
            <Card.Text>{this.props.description}</Card.Text>
            

            
          </Card.Body>
          <Button onClick={this.increaseVotes} variant="primary">
              VOTE
            </Button>
        </Card>
      </>
    );
  }
}

export default HornedBeast;