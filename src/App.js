import { Component } from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />

          


         
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
