import "./index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Books from "./pages/Books.jsx";
import BookInfo from "./pages/BookInfo.jsx";
import { books } from "./data";
import Cart from "./pages/Cart.jsx";
import React, { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, {...book, quantity:1}])
  }

  function changeQuantity(book, quantity) {
    console.log(book, quantity)
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route
            path="/books"
            exact
            Component={() => <Books books={books} />}
          />
          <Route
            path="/books/:id"
            Component={() => <BookInfo books={books} addToCart={addToCart} />}
          />
          <Route path="/cart" Component={() => <Cart books={books} cart= {cart} changeQuantity={changeQuantity} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
