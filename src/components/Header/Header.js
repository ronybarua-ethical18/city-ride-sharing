import { Button, Container, Jumbotron, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = (props) => {
    const loggedInUser = props.loggedInUser;
    return (
        <Container fluid>
            <Navbar collapseOnSelect expand="lg" bg="white" className="shadow pt-2 pb-2" variant="light">
                <Navbar.Brand href="#home">City Ride Share</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/home"className="">Home</Link>
                        <Link to="/destination" className="ml-2 mr-2">Destination</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact" className="ml-2 mr-2">Contact</Link>
                        <Link className="mr-2" to="/login">Login</Link>
                        <span>{loggedInUser.email}</span>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;