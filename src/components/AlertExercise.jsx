// AlertExercise.jsx
import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertExercise = ({type,titre, contenu}) => {
  return (
    <Alert variant={type}>
      <Alert.Heading>{titre}</Alert.Heading>
      <p>{contenu}</p>
    </Alert>
  );
};

export default AlertExercise;
