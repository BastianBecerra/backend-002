import {useNavigate} from 'react-router-dom'
import React, { useContext, useEffect } from 'react'
import Context from '../../Context'
import { ListGroup, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'

export default function Usuario() {
  const { cart, increment, decrement, items, total, settotal } = useContext(Context)
  settotal(cart.reduce((acum, { count, price }) => acum + price * count, 0))
  useEffect(() => {}, [cart, items, total])
  const navigate = useNavigate()
  return (
    <>
      <>
      <Container className="pt-5" fluid="sm">
      <h1>Editar informacion 😃!</h1>
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
        navigate(`../user`)
      }}
      variant="primary" type="submit">
        Editar informacion 😀!!
      </Button>
    </Form>
    </Container>
      </>
      <>
      <ListGroup variant='flush'>
                {cart.map((pizza, i) => (
                    <ListGroup.Item className='rounded text-capitalize bg-dark text-light m-1 shadow d-flex justify-content-between py-2' key={i}>
                        <img src={pizza.img} style={{ width: 50 }} alt='' />
                        <h6 className='mb-0 text-capitalize p-2'>{pizza.name}</h6>
                        <h6 className='mb-0 p-2 text-success'>${(pizza.price)}</h6>
                        <div className='d-flex justify-content-end align-items-center'>
                            <h6 className='mb-0 p-2 text-success'>${(pizza.price * pizza.count)}</h6>
                            <Button variant='outline-danger' onClick={() => decrement(i)}>-</Button>
                            <b className='mx-2'>{pizza.count}</b>
                            <Button variant='outline-primary' onClick={() => increment(i)}>+</Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <div className='d-flex justify-content-end pt-5'>
                <h2 className='my-4 mx-4'>Items:{items}</h2>
                <h2 className='my-4 mx-4'>Total: ${total}</h2>
                <div className='pt-4 mx-2'>
                    <Button variant='outline-success'>Ir a Pagar</Button>
                </div>
                <div className='pt-4 mx-2'>
                    <NavLink to='/'><Button variant='outline-primary'>Volver</Button></NavLink>
                </div>
            </div>
        </>
      </>
  );
}
