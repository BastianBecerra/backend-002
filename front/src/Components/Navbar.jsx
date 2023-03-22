

import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { BsFillCartFill } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import Context from "../Context";
import React, { useContext, useEffect } from "react";

const Navigation = () => {
  const { items, setitems, cart, total, settotal } = useContext(Context);
  setitems(cart.reduce((acum, { count }) => acum + count, 0));
  settotal(cart.reduce((acum, { count, price }) => acum + price * count, 0));
  useEffect(() => {}, [cart, items, total]);
  return (
    <Container fluid className="header" xs={12} sm={4}>
      <Navbar className="fixed-top " bg="dark" variant="dark">
        <Container fluid>
          <NavLink className="d-flex justify-content-start" to="/">
            <img
              src="../assets/img/logo-png.png"
              alt="LOGO XD1"
              width="150rem"
              
            />
          </NavLink>
          <Nav className="px-3 ">
            <NavLink to="/login">
              <VscAccount className="text-light mx-4 mt-2 fs-4" />
            </NavLink>
            <NavLink
              className="justify-content-end p-2 text-decoration-none text-light"
              to="/carrito"
            >
              <Badge pill bg="danger">
                {items}
              </Badge>
              <BsFillCartFill className="fs-4" />
              <span className="text-success px-2">$ {total}</span>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <h1 className="text-center text-light h1nav ">Descubre el sabor!!!</h1>
    </Container>
  );
};
export default Navigation;
