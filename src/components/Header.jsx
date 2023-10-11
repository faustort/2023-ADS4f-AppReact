import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HeaderBootstrap() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand><Link to="/" className="nav-link" >App Juareis</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navegacao" />
                <Navbar.Collapse id="navegacao">
                    <Nav className="navbar-expand-lg navbar-light">
                        <Link to="/" className="nav-link">Inicial</Link>
                        <Link to="/sobre" className="nav-link">Sobre</Link>
                        <Link to="/contato" className="nav-link">Contato</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
