import React, { useContext } from 'react'
import Context from '../../Context'
import { useParams } from 'react-router-dom'
import { Card, ListGroup, Button, Row, Col } from 'react-bootstrap'
import { BsFillCartFill } from "react-icons/bs";

function Pizza() {
    //USING CONTEXT TO ACCESS TO DATA ARRAY ´PIZZA AND THE FUNCTION ADDCART
    const { productos, addCart } = useContext(Context)
    //USE ID AS A PARAMETERS TO FILTER THE SELECTED PIZZA OR ITEM
    const { id } = useParams()

    return (
        <div className='container-sm'>
            <Row className='m-5'>
                <Col xs={12} md={{ span: 6, offset: 3 }}>
                    {productos.filter(pizza => pizza.id === id).map(pizza => {
                        return (
                            //CARD
                            <Card className='text-center justify-content-center p-2 bg-dark text-light shadow' key={pizza.id} >
                                <Card.Img variant="top" src={pizza.imagen} />
                                <Card.Body>
                                    <Card.Title>{pizza.nombre.toUpperCase()}</Card.Title>
                                    <Card.Text>{pizza.descripcion}</Card.Text>
                                    <ListGroup variant='flush'>
                                        {pizza.descripcion.map((ingredient, i) => (
                                            <ListGroup.Item className='rounded text-capitalize bg-danger text-light m-1' key={i}>
                                                {ingredient}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                    <Card.Title className='p-2 text-success'>Precio: ${pizza.precio}</Card.Title>
                                    <Button variant="outline-light" onClick={() => { addCart(pizza) }}>Añadir <BsFillCartFill/></Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </Col>
            </Row>
        </div>
    )
}

export default Pizza