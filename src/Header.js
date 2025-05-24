import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchProducts from "./SearchProducts";

function Header() {
  const user = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">EComm Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar_warapper">
              {localStorage.getItem("user-info") ? (
                <>
                  <Link to="/add">Add Product</Link>
                  {/* <Link to="/update">Update Product</Link> */}
                  <Link to="/search">Search Products</Link>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Registration</Link>
                </>
              )}
            </Nav>
            {user && (
              <Nav>
                <NavDropdown
                  title={user.name || "User"}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.ItemText>
                    Username: {user.name}
                  </NavDropdown.ItemText>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
