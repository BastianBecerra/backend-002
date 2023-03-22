import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import axios from 'axios'

function agregarProducto() {
  axios.post('https://3001/producto').then(respuesta => {
    console.log(respuesta.data)
  })

  return (    
    <Container className="pt-5" fluid="sm">
    <h1>Add Product 😀!!</h1>
  <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label><h2>Product's Name</h2></Form.Label>
      <Form.Control type="email" placeholder="Add name :D!" />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label><h2>Price</h2></Form.Label>
      <Form.Control type="password" placeholder="Add Price :D!" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label><h2>Image</h2></Form.Label>
      <Form.Control type="password" placeholder="Add Image :D!" />
    </Form.Group>
    <Button
    variant="primary" type="submit"
    
    onClick={()=>
      {
        agregarProducto()
      }} 
      >
      Add 😃!!!
    </Button> 
  </Form>
  </Container>
  )
}

export default agregarProducto