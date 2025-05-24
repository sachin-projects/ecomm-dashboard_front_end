import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import ProductList from "./ProductList";
import SearchProducts from "./SearchProducts";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/login" Component={Login}></Route>
          <Route path="/Register" Component={Register}></Route>
          <Route path="/add" Component={AddProduct}></Route>
          <Route path="/" Component={ProductList}></Route>
          <Route path="/search" Component={SearchProducts}></Route>
          <Route path="/update/:id" Component={UpdateProduct}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
