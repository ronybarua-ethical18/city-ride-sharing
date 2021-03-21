import { faBiking } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = (props) => {
    const loggedInUser = props.loggedInUser;
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="none" className="shadow pt-2 mb-4 pb-2" variant="light">
                <Navbar.Brand id="brand"
                    href="/home">
                    <b><FontAwesomeIcon icon={faBiking} className="mr-2" spin></FontAwesomeIcon>City Ride Share</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto text-white">
                        <Link to="/home" className="text-white">Home</Link>
                        <Link to="/destination" className="text-white ml-3 mr-3">Destination</Link>
                        {!loggedInUser.email && <Link className="text-white mr-3" to="/login">Login</Link>}
                        <span><b className="text-white">{loggedInUser.email}</b></span>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;