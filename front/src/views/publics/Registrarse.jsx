// React Hooks =D! 
import {useNavigate} from 'react-router-dom'
// React Bootstrap Items :DD!
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
function Registrarse() {
  // const for navigate =D!
  const navigate = useNavigate()
  return (
    //Form for Register :D!!
    <Container className="pt-5" fluid="sm">
      <h1>Registrarse 😃!</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h2>Email address</h2></Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label><h2>Teléfono</h2></Form.Label>
        <Form.Control placeholder="Enter the Phone =DD"/>
      </Form.Group>
      <Form.Group>
        <Form.Label><h2>Dirección de Facturación</h2></Form.Label>
        <Form.Control placeholder="Enter de Facturación Adress =DD!" />
      </Form.Group>
      {/* Button for Register and Go to Login :D! */}
      <Button 
      onClick={() => {
        navigate(`../login`)
      }}
      variant="primary" type="submit">
        Register 😀!!
      </Button>
    </Form>
    </Container>
  );
}

export default Registrarse;
