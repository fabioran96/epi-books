import React from 'react';
import { Alert } from 'react-bootstrap';

const Welcome = () => {
  return (
    <Alert variant="info" className="mt-4">
      <Alert.Heading>Welcome to EpiBooks!</Alert.Heading>
      <p>You'll never get tired of reading. So keep pushing!</p>
    </Alert>
  );
};

export default Welcome;
