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
    setCart([...cart, { ...book, quantity: 1 }]);
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map((item) =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    );
  }

  function removeItem(item) {
    setCart(cart.filter(book =>book.id !== item.id))

  }

  function numberOfItems() {
    let counter=0
    cart.forEach(item => {
      counter += item.quantity

    })
    return counter;
  }

  
  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <Router>
      <div className="App">
        <Nav numberOfItems={numberOfItems()} />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route
            path="/books"
            exact
            Component={() => <Books books={books} />}
          />
          <Route
            path="/books/:id"
            Component={() => (
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            )}
          />
          <Route
            path="/cart"
            Component={() => (
              <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />
            )}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
