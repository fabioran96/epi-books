import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import CommentArea from './CommentArea';

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  toggleSelected = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    const { book } = this.props;
    return (
      <>
        <Card
          className="mb-4"
          onClick={this.toggleSelected}
          style={{ border: this.state.selected ? '2px solid red' : 'none' }}
        >
          <Card.Img variant="top" src={book.img} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea asin={book.asin} />}
      </>
    );
  }
}

export default SingleBook;

