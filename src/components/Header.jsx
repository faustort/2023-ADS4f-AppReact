import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Inicial</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sobre" className="nav-link">Sobre</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contato" className="nav-link">Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}