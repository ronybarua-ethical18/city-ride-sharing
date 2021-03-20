import { Button, Container, Jumbotron, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = (props) => {
    const loggedInUser = props.loggedInUser;
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="none" className="shadow pt-2 mb-4 pb-2" variant="light">
                <Navbar.Brand id="brand" href="/home"><b>City Ride Share</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto text-white">
                        <Link to="/home"className="text-white">Home</Link>
                        <Link to="/destination" className="text-white ml-3 mr-3">Destination</Link>
                        <Link className="text-white" to="/blog">Blog</Link>
                        <Link to="/contact" className="text-white ml-3 mr-3">Contact</Link>
                        <Link className="text-white mr-3" to="/login">Login</Link>
                        <span><b className="text-white">{loggedInUser.email}</b></span>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;