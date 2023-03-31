import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
    return (
        <>
            <Navbar style={{marginBottom:'20px'}} bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/About"}>About Us</Link>
                    <Link to={"/Contact"}>Contact Us</Link>
                </Nav>
                </Container>
            </Navbar>
            <main style={{padding: '0 10px'}}>
                <Outlet />
            </main>
        </>
    )
};