import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <>
     <Navbar style={{ borderBottom: '1px solid #cbc5c5'}}> 
      <Container >
        <Navbar.Brand href="#home">Header</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Oussama Handous</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Card style={{margin: '20px', display: 'flex', alignItems: 'center'}}>
    <Form style={{ width: '50%', margin: '20px' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Card>

      <Container style={{ width: '50%', height: '200px'}}>
      <img style={{
       objectFit: 'contain',
       paddingBottom: 10
      }}  width='100%' height='200'  variant="top" src="https://wallpaper.dog/large/20466209.jpg" />

      </Container>

      <Card style={{
        position:'relative',
        width: '100%'
      }}>
        <Card.Body >
          <Card.Text class="text-center">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
      
  );
}

export default App;
