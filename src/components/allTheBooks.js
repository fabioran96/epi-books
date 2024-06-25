import React, { useEffect, useState } from 'react';
import { Card, CardDeck, Container, Row, Col } from 'react-bootstrap';
import booksData from '../data/scifi.json'; // Modifica il percorso in base al file JSON che vuoi caricare

const AllTheBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Supponendo che il file JSON sia già importato come `booksData`
    setBooks(booksData);
  }, []);

  return (
    <Container>
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
};

export default AllTheBooks;
