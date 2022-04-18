import React, { useContext } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { BiCart, BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import CartContext from "../../CartContext";
import SearchBar from "./SearchBar";

function NavigationBar() {
  const { item } = useContext(CartContext);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">ZeroZilla: Task</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "140px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex">
            <SearchBar />
          </Form>
        </Navbar.Collapse>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <BiCart className="nav-icon" /> <span>{item.length}</span>
        </Link>
        <div className="dropdown">
          <BiUser className="nav-icon" />
          <div className="dropdown-content">
            <p><a href="/">Home</a> </p>    
            <p><a href="/profile">Profile</a></p>
            <p>Logout</p>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
