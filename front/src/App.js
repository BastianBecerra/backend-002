import "bootstrap/dist/css/bootstrap.min.css"
import Context from './Context'

//BrowserRouter
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Components
import Navbar from "./Components/Navbar"

//views/publics
import Home from './views/publics/Tienda'
import Carrito from './views/publics/Carrito'
import Producto from './views/publics/Producto'
import Login from './views/publics/Login'
import Registrarse from './views/publics/Registrarse'

//views/privates :D!!
import Usuario from './views/privates/Usuario'
import AgregarProducto from './views/privates/AgregarProducto'
//Use effect/ useState
import { useEffect, useState } from "react"

function App() {
  //UseState statements
  const [productos, setProductos] = useState([])
  const [cart, setcart] = useState([])
  const [items, setitems] = useState(0)
  const [total, settotal] = useState(0)

  // Add to Cart function, 
  const addCart = ({ id, price, name, img }) => {
    // looking the index of the item by id
    const index = cart.findIndex((pizza) => pizza.id === id);
    //adding Detais from pizza to cart and set count to 1
    const productoDetails = { id, price, name, img, count: 1 };

    if (index >= 0) {
      cart[index].count++;
      setcart([...cart]);
    } else {
      setcart([...cart, productoDetails]);
    }
  };
  //function increment item by index to increment count everytime while button has been clicked
  const increment = (i) => {
    cart[i].count++;
    setcart([...cart]);
  };
  //function decremnt item by index to decrement count only if count is > 1  everytime while button has been clicked, if count if 1 remove item from cart
  const decrement = (i) => {
    const { count } = cart[i];
    if (count === 1) {
      cart.splice(i, 1);
    } else {
      cart[i].count--;
    }
    setcart([...cart]);
  };
  // all state and function needed to be called in other components or views
  const globalState = { productos, cart, items, total, setitems, setProductos, setcart, addCart, increment, decrement, settotal }
  // use effect to call the api
  useEffect(() => { apiPizza() }, [])
  //async function to call the api and get the array data
  async function apiPizza() {
    const endpoint = 'http://localhost:3001/'
    const resp = await fetch(endpoint)
    const data = await resp.json()
    setProductos(data)
  }
  return (
    //my app
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/producto/:id" element={<Producto />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/registrarse" element={<Registrarse />} /> 
            <Route path="/user"
            element={<Usuario />} />
            <Route path="/adminaddproduct"
            element={<AgregarProducto />} /> 
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
