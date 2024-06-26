import React from 'react';
import { Alert } from 'react-bootstrap';

class Welcome extends React.Component {
  render() {
    return (
      <Alert variant="info" className="mt-4">
        <Alert.Heading>Welcome to EpiBooks!</Alert.Heading>
        <p>Your one-stop shop for the best books in the world.</p>
      </Alert>
    );
  }
}

export default Welcome;
