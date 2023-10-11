import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";



//<Image src={require('../assets/images/logo.jpg')} width={200}/>

export default function HeaderBootstrap() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <Link to="/" className="nav-link" >
                        <Image
                            src={require("../assets/images/logosenac.png")}
                            width={150}
                        />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navegacao" />
                <Navbar.Collapse id="navegacao" className="justify-content-end">
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
