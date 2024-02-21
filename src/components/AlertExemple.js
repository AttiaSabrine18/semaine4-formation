import React from 'react';
import { Alert } from 'react-bootstrap';
const AlertExample = () => {
  return (
    <div>
      <Alert variant="success">
        Succès ! Vous avez effectué avec succès cette opération.
      </Alert>
      <Alert variant="danger">
        Oh non ! Une erreur s'est produite lors de cette opération.
      </Alert>
    </div>
  );
}
export default AlertExample;