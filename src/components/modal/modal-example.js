import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Example() {
    return (
        <Modal.Dialog
        size="lg"
        aria-labelledby="example-modal"
        >
        <Modal.Header closeButton closeLabel='Close'> 
          <Modal.Title 
            aria-labelledby="modal-title"
          >Modal title</Modal.Title>
        </Modal.Header>
      
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
      
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }

export default Example;