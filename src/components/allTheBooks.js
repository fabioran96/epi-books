import React from 'react';
import { Card, Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import scifiBooks from '../data/scifi.json';
import fantasyBooks from '../data/fantasy.json';
import horrorBooks from '../data/horror.json';
import romanceBooks from '../data/romance.json';
import historyBooks from '../data/history.json';

class AllTheBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: 'scifi'
    };
  }

  handleSelectGenre = (genre) => {
    this.setState({ genre });
  };

  getBooksByGenre = (genre) => {
    switch (genre) {
      case 'scifi':
        return scifiBooks;
      case 'fantasy':
        return fantasyBooks;
      case 'horror':
        return horrorBooks;
      case 'romance':
        return romanceBooks;
      case 'history':
        return historyBooks;
      default:
        return [];
    }
  };

  render() {
    const books = this.getBooksByGenre(this.state.genre);

    return (
      <Container>
        <ButtonGroup className="mt-4">
          <Button onClick={() => this.handleSelectGenre('scifi')}>Sci-Fi</Button>
          <Button onClick={() => this.handleSelectGenre('fantasy')}>Fantasy</Button>
          <Button onClick={() => this.handleSelectGenre('horror')}>Horror</Button>
          <Button onClick={() => this.handleSelectGenre('romance')}>Romance</Button>
          <Button onClick={() => this.handleSelectGenre('history')}>History</Button>
        </ButtonGroup>
        <Row className="mt-4">
          {books.map(book => (
            <Col sm={12} md={6} lg={4} className="mb-4" key={book.asin}>
              <Card>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>Price: ${book.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;


