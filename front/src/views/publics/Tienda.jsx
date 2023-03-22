import React from "react";
import { useContext } from "react";
import { Card, Button, ListGroup, Row, Col } from "react-bootstrap";
import Context from "../../Context";
import { useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";
const Home = () => {
  const { productos, addCart } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div>
      <header style={{ backgroundImage: `url("../../assets/img/headerimage.jpg")`, textAlign: 'center' }}>
        <h1 style={{color: 'black'}}>Artículos Electrónicos :D!</h1>
        <h5 style={{color: 'black'}}>Productos importados desde USA</h5>
      </header>
      <Row>
        {productos.map((producto, i) => {
          return (
            <Col xs={12} sm={3}>
              <Card
                className="text-center m-2 bg-dark text-light p-2 rounded shadow"
                key={producto.id}
              >
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                  <Card.Title>{producto.nombre.toUpperCase()}</Card.Title>
                  { <ListGroup variant='flush' key={i}>
                                                {producto.descripcion.map((ingredient, i) => (
                                                    <ListGroup.Item className='rounded text-capitalize bg-danger text-light m-1' key={i} >
                                                        {ingredient}
                                                    </ListGroup.Item>
                                                ))}
                                                <Card.Title className='p-2 text-success'>Precio: ${producto.precio}</Card.Title>
                                            </ListGroup>}
                  <Card.Text>{producto.categoria.toUpperCase()}</Card.Text>
                  <Button
                    className="mx-3"
                    variant="outline-light"
                    onClick={() => {
                      navigate(`producto/${producto.id}`);
                    }}
                  >
                    <BiFoodMenu /> Detalles
                  </Button>
                  <Button
                    className="mx-3"
                    variant="outline-light"
                    onClick={() => {
                      addCart(producto);
                    }}
                  >
                    Carrito <BsFillCartFill />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Home;
