import React, { useContext } from 'react';
import { Button, Container, Jumbotron, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Container fluid>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand href="#home">City Ride Share</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/home"className="">Home</Link>
                        <Link to="/destination" className="ml-2 mr-2">Destination</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact" className="ml-2 mr-2">Contact</Link>
                        <Link to="/login">Login</Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* <Jumbotron>
                <h1>Welcome to city ride sharing app</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Explore</Button>
                </p>
            </Jumbotron> */}
        </Container>
    );
};

export default Header;