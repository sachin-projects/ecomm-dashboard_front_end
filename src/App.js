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
import { GoogleOAuthProvider } from "@react-oauth/google";
import GooglePage from "./GooglePage";

function App() {
    return (
        <GoogleOAuthProvider clientId="983021774221-d498835vcpo3caulst23sb2koqd9vt4v.apps.googleusercontent.com">
            <div className="App">
                <Router>
                    {/* <Header /> */}
                    <Routes>
                        <Route path="/login" Component={Login}></Route>
                        <Route path="/Register" Component={Register}></Route>
                        <Route path="/add" Component={AddProduct}></Route>
                        <Route path="/" Component={ProductList}></Route>
                        <Route
                            path="/search"
                            Component={SearchProducts}
                        ></Route>
                        <Route
                            path="/update/:id"
                            Component={UpdateProduct}
                        ></Route>
                        <Route path="/google" Component={GooglePage}></Route>
                    </Routes>
                </Router>
            </div>
        </GoogleOAuthProvider>
    );
}

export default App;
