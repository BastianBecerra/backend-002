import {useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
function Login() {
  const navigate = useNavigate()
  return (
    <Container className="pt-5" fluid="sm">
      <h1>Login</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h2>Email address</h2></Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><h2>Password</h2></Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
       <div onClick={() => {
        navigate(`../registrarse`)
       }}>Click aquí para Registrarse 😀!</div>
      <Button
      variant="primary" type="submit"
      onClick={()=>
        {
          navigate(`../user`)
        }}
        >
        Login
      </Button> 
    </Form>
    </Container>
  );
}

export default Login;
