import React from 'react';
import { Button } from 'react-bootstrap';
class ButtonComponent extends React.Component {
    render() {
      return (
        <div>
          <h1>ONG Title</h1>
          <p>Información sobre la ONG...</p>
          <Button variant="primary">Donar</Button>
        </div>
      );
    }
  }
  export default ButtonComponent;